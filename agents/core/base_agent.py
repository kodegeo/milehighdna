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


class BaseAgent(ABC):
    """
    Base class for all agents.
    
    Provides common functionality:
    - Dry-run mode (no external API calls)
    - Structured logging
    - Guardrail checks before execution
    - State persistence for resumable operations
    """
    
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
