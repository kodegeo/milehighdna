"""
Base Agent Class

Provides reusable functionality for all agents:
- Dry-run mode
- Logging
- Guardrail execution
- State persistence
"""

import json
import logging
import os

from abc import ABC, abstractmethod
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, Optional
from dotenv import load_dotenv

load_dotenv()

def get_openai_key() -> Optional[str]:
    return os.getenv("OPENAI_API_KEY")


class BaseAgent(ABC):
    """
    Base class for all agents.
    
    Provides common functionality:
    - Dry-run mode (no external API calls)
    - Structured logging
    - Guardrail checks before execution
    - State persistence for resumable operations
    """

    def has_openai_key(self) -> bool:
        return bool(os.getenv("OPENAI_API_KEY"))
    
    def __init__(
        self,
        agent_name: str,
        dry_run: bool = True,
        state_dir: Optional[Path] = None,
        log_dir: Optional[Path] = None
    ):
        """
        Initialize the base agent.
        
        Args:
            agent_name: Unique identifier for this agent instance
            dry_run: If True, no external API calls will be made
            state_dir: Directory for state persistence (default: agents/state/)
            log_dir: Directory for log files (default: agents/logs/)
        """
        self.agent_name = agent_name
        self.dry_run = dry_run
        
        # Set up directories
        agents_root = Path(__file__).parent.parent
        self.state_dir = state_dir or (agents_root / "state")
        self.log_dir = log_dir or (agents_root / "logs")
        
        # Ensure directories exist
        self.state_dir.mkdir(parents=True, exist_ok=True)
        self.log_dir.mkdir(parents=True, exist_ok=True)
        
        # Set up logging
        self.logger = self._setup_logging()
        
        # State management
        self.state_file = self.state_dir / f"{agent_name}_state.json"
        self.state = self._load_state()
        
        self.logger.info(f"Initialized {agent_name} (dry_run={dry_run})")
    
    def _setup_logging(self) -> logging.Logger:
        """Set up structured logging for this agent."""
        logger = logging.getLogger(self.agent_name)
        logger.setLevel(logging.INFO)
        
        # Avoid duplicate handlers
        if logger.handlers:
            return logger
        
        # File handler
        log_file = self.log_dir / f"{self.agent_name}_{datetime.now().strftime('%Y%m%d')}.log"
        file_handler = logging.FileHandler(log_file)
        file_handler.setLevel(logging.INFO)
        
        # Console handler
        console_handler = logging.StreamHandler()
        console_handler.setLevel(logging.INFO)
        
        # Formatter
        formatter = logging.Formatter(
            '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
        )
        file_handler.setFormatter(formatter)
        console_handler.setFormatter(formatter)
        
        logger.addHandler(file_handler)
        logger.addHandler(console_handler)
        
        return logger
    
    def _load_state(self) -> Dict[str, Any]:
        """Load persisted state from disk."""
        if self.state_file.exists():
            try:
                with open(self.state_file, 'r') as f:
                    return json.load(f)
            except (json.JSONDecodeError, IOError) as e:
                self.logger.warning(f"Failed to load state: {e}. Starting fresh.")
                return {}
        return {}
    
    def _save_state(self) -> None:
        """Persist current state to disk."""
        try:
            with open(self.state_file, 'w') as f:
                json.dump(self.state, f, indent=2)
        except IOError as e:
            self.logger.error(f"Failed to save state: {e}")
    
    def update_state(self, key: str, value: Any) -> None:
        """Update a state value and persist it."""
        self.state[key] = value
        self._save_state()
        self.logger.debug(f"Updated state: {key} = {value}")
    
    def get_state(self, key: str, default: Any = None) -> Any:
        """Get a state value."""
        return self.state.get(key, default)
    
    def check_guardrails(self) -> bool:
        """
        Execute guardrail checks before running the agent.
        
        Override this method in subclasses to add domain-specific checks.
        
        Returns:
            True if all guardrails pass, False otherwise
        """
        if self.dry_run:
            self.logger.info("🔒 DRY-RUN MODE: Guardrails passed (no external calls will be made)")
        else:
            self.logger.warning("⚠️  LIVE MODE: Guardrails should verify API credentials and permissions")
        
        return True
    
    def can_publish_live(self) -> bool:
        """
        Check if live publishing is allowed.
        
        This method provides a guardrail for publishing operations.
        By default, returns False to prevent accidental live publishing.
        
        Subclasses can override this method to implement custom logic,
        but should respect dry_run mode.
        
        Returns:
            False (publishing is blocked by default)
        """
        if self.dry_run:
            self.logger.warning(
                "🚫 Attempt to check live publishing capability in dry-run mode. "
                "Live publishing is blocked."
            )
            return False
        
        # Even in non-dry-run mode, publishing is disabled by default
        # This must be explicitly enabled in a subclass
        return False
    
    def check_cadence(self, service_name: str, location: str = "default") -> Dict[str, Any]:
        """
        Check if posting cadence allows a new post.
        
        Enforces anti-spam guardrail: max 1 post per service per location per 24 hours.
        
        Args:
            service_name: Name of the service
            location: Location identifier (default: "default")
        
        Returns:
            Dictionary with:
                - allowed: Boolean indicating if posting is allowed
                - reason: String explaining why posting is/isn't allowed
                - last_post_time: ISO timestamp of last post (if any)
                - hours_since_last: Hours since last post (if any)
        """
        history_file = self.state_dir / "gbp_post_history.json"
        
        # Load posting history
        history = {}
        if history_file.exists():
            try:
                with open(history_file, 'r') as f:
                    history = json.load(f)
            except (json.JSONDecodeError, IOError) as e:
                self.logger.warning(f"Failed to load post history: {e}")
                history = {}
        
        # Create key for service + location
        key = f"{service_name}::{location}"
        
        # Check if there's a recent post
        if key in history:
            last_post_time_str = history[key].get('last_post_time')
            if last_post_time_str:
                try:
                    last_post_time = datetime.fromisoformat(last_post_time_str)
                    hours_since = (datetime.now() - last_post_time).total_seconds() / 3600
                    
                    if hours_since < 24:
                        return {
                            "allowed": False,
                            "reason": f"Posting cadence violated: last post was {hours_since:.1f} hours ago (minimum 24 hours required)",
                            "last_post_time": last_post_time_str,
                            "hours_since_last": hours_since
                        }
                except (ValueError, TypeError) as e:
                    self.logger.warning(f"Failed to parse last post time: {e}")
        
        # Cadence allows posting
        return {
            "allowed": True,
            "reason": "Cadence check passed",
            "last_post_time": history.get(key, {}).get('last_post_time'),
            "hours_since_last": None
        }
    
    def record_post(self, service_name: str, location: str = "default") -> None:
        """
        Record a post in the posting history.
        
        Args:
            service_name: Name of the service
            location: Location identifier (default: "default")
        """
        history_file = self.state_dir / "gbp_post_history.json"
        
        # Load existing history
        history = {}
        if history_file.exists():
            try:
                with open(history_file, 'r') as f:
                    history = json.load(f)
            except (json.JSONDecodeError, IOError) as e:
                self.logger.warning(f"Failed to load post history: {e}")
                history = {}
        
        # Create key for service + location
        key = f"{service_name}::{location}"
        
        # Update history
        history[key] = {
            "service_name": service_name,
            "location": location,
            "last_post_time": datetime.now().isoformat(),
            "post_count": history.get(key, {}).get('post_count', 0) + 1
        }
        
        # Save history
        try:
            with open(history_file, 'w') as f:
                json.dump(history, f, indent=2)
        except IOError as e:
            self.logger.error(f"Failed to save post history: {e}")
    
    @abstractmethod
    def execute(self, *args, **kwargs) -> Dict[str, Any]:
        """
        Execute the agent's main logic.
        
        This method must be implemented by subclasses.
        In dry-run mode, this should simulate actions without making API calls.
        
        Returns:
            Dictionary with execution results
        """
        pass
    
    def run(self, *args, **kwargs) -> Dict[str, Any]:
        """
        Main entry point for running the agent.
        
        This method:
        1. Checks guardrails
        2. Executes the agent logic
        3. Returns results
        
        Args:
            *args, **kwargs: Passed to execute()
            
        Returns:
            Dictionary with execution results
        """
        self.logger.info(f"Starting {self.agent_name} execution...")
        
        if not self.check_guardrails():
            self.logger.error("Guardrail checks failed. Aborting execution.")
            return {
                "success": False,
                "error": "Guardrail checks failed",
                "agent": self.agent_name
            }
        
        try:
            result = self.execute(*args, **kwargs)
            result["agent"] = self.agent_name
            result["dry_run"] = self.dry_run
            result["timestamp"] = datetime.now().isoformat()
            
            self.logger.info(f"Completed {self.agent_name} execution")
            return result
            
        except Exception as e:
            self.logger.error(f"Error during execution: {e}", exc_info=True)
            return {
                "success": False,
                "error": str(e),
                "agent": self.agent_name,
                "dry_run": self.dry_run
            }
