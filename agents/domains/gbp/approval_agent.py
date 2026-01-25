"""
Google Business Profile Approval Agent

Manages approval workflow for GBP posts.
Reads from gbp_posts_pending.json and allows approving/rejecting posts.
Never publishes posts - only manages approval status.
"""

import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any, Optional

from agents.core.base_agent import BaseAgent


class GBPApprovalAgent(BaseAgent):
    """
    Agent for managing approval workflow for GBP posts.
    
    Responsibilities:
    - Read pending posts from gbp_posts_pending.json
    - Approve or reject posts
    - Track review metadata
    - Never publish posts (publishing is separate)
    """
    
    def __init__(self, dry_run: bool = True):
        """Initialize the GBP Approval Agent."""
        super().__init__(
            agent_name="gbp.approval",
            dry_run=dry_run
        )
        
        # Set up pending posts file path
        self.pending_posts_file = self.state_dir / "gbp_posts_pending.json"
        
        self.logger.info("GBP Approval Agent initialized")
    
    def _load_pending_posts(self) -> List[Dict[str, Any]]:
        """Load pending posts from JSON file."""
        if not self.pending_posts_file.exists():
            self.logger.warning(f"Pending posts file not found: {self.pending_posts_file}")
            return []
        
        try:
            with open(self.pending_posts_file, 'r') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError) as e:
            self.logger.error(f"Failed to load pending posts: {e}")
            return []
    
    def _save_pending_posts(self, posts: List[Dict[str, Any]]) -> None:
        """Save pending posts to JSON file."""
        try:
            with open(self.pending_posts_file, 'w') as f:
                json.dump(posts, f, indent=2)
        except IOError as e:
            self.logger.error(f"Failed to save pending posts: {e}")
            raise
    
    def _find_most_recent_post(self, service_name: str, posts: List[Dict[str, Any]]) -> Optional[Dict[str, Any]]:
        """Find the most recent pending post for a service."""
        # Filter posts for the service
        service_posts = [
            p for p in posts
            if p.get('service_name') == service_name
        ]
        
        if not service_posts:
            return None
        
        # Sort by generated_at (most recent first)
        service_posts.sort(
            key=lambda x: x.get('generated_at', ''),
            reverse=True
        )
        
        return service_posts[0]
    
    def approve_post(self, service_name: str, reviewer: str = "manual") -> Dict[str, Any]:
        """
        Approve the most recent pending post for a service.
        
        Args:
            service_name: Name of the service
            reviewer: Name of the reviewer (default: "manual")
        
        Returns:
            Dictionary with approval result
        """
        posts = self._load_pending_posts()
        
        if not posts:
            return {
                "success": False,
                "error": "No pending posts found"
            }
        
        # Find most recent post for service
        post = self._find_most_recent_post(service_name, posts)
        
        if not post:
            return {
                "success": False,
                "error": f"No pending posts found for service: {service_name}"
            }
        
        # Check if already approved or rejected
        if post.get('approved', False):
            return {
                "success": False,
                "error": f"Post for {service_name} is already approved"
            }
        
        if post.get('rejected', False):
            return {
                "success": False,
                "error": f"Post for {service_name} was previously rejected"
            }
        
        # Update post with approval
        post['approved'] = True
        post['rejected'] = False
        post['reviewed_at'] = datetime.now().isoformat()
        post['reviewer'] = reviewer
        
        # Save updated posts
        self._save_pending_posts(posts)
        
        self.logger.info(f"✅ Approved post for {service_name} (reviewer: {reviewer})")
        
        return {
            "success": True,
            "service_name": service_name,
            "post": post,
            "action": "approved"
        }
    
    def reject_post(self, service_name: str, reason: str = "", reviewer: str = "manual") -> Dict[str, Any]:
        """
        Reject the most recent pending post for a service.
        
        Args:
            service_name: Name of the service
            reason: Reason for rejection (optional)
            reviewer: Name of the reviewer (default: "manual")
        
        Returns:
            Dictionary with rejection result
        """
        posts = self._load_pending_posts()
        
        if not posts:
            return {
                "success": False,
                "error": "No pending posts found"
            }
        
        # Find most recent post for service
        post = self._find_most_recent_post(service_name, posts)
        
        if not post:
            return {
                "success": False,
                "error": f"No pending posts found for service: {service_name}"
            }
        
        # Check if already approved or rejected
        if post.get('approved', False):
            return {
                "success": False,
                "error": f"Post for {service_name} is already approved"
            }
        
        if post.get('rejected', False):
            return {
                "success": False,
                "error": f"Post for {service_name} was previously rejected"
            }
        
        # Update post with rejection
        post['approved'] = False
        post['rejected'] = True
        post['reviewed_at'] = datetime.now().isoformat()
        post['reviewer'] = reviewer
        post['rejection_reason'] = reason
        
        # Save updated posts
        self._save_pending_posts(posts)
        
        self.logger.info(f"❌ Rejected post for {service_name} (reviewer: {reviewer}, reason: {reason})")
        
        return {
            "success": True,
            "service_name": service_name,
            "post": post,
            "action": "rejected"
        }
    
    def check_guardrails(self) -> bool:
        """Check guardrails before processing approvals."""
        if not super().check_guardrails():
            return False
        
        # Approval agent always works in dry-run mode
        # It only modifies local JSON files, never publishes
        return True
    
    def execute(self, service_name: Optional[str] = None, approve: bool = False, reject: bool = False, reason: str = "") -> Dict[str, Any]:
        """
        Execute approval workflow.
        
        Args:
            service_name: Service name to approve/reject
            approve: If True, approve the post
            reject: If True, reject the post
            reason: Reason for rejection (if rejecting)
        
        Returns:
            Dictionary with execution results
        """
        if not service_name:
            return {
                "success": False,
                "error": "Service name is required"
            }
        
        if approve and reject:
            return {
                "success": False,
                "error": "Cannot both approve and reject a post"
            }
        
        if not approve and not reject:
            return {
                "success": False,
                "error": "Must specify either --approve or --reject"
            }
        
        if approve:
            result = self.approve_post(service_name)
        else:
            result = self.reject_post(service_name, reason=reason)
        
        return {
            "success": result.get("success", False),
            "action": result.get("action"),
            "service_name": service_name,
            "error": result.get("error")
        }
