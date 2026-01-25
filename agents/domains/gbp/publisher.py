"""
Google Business Profile Publisher

Interface for publishing posts to Google Business Profile.
Currently disabled by default - raises NotImplementedError on publish attempts.
"""

import os
from typing import Dict, Any, Optional


class GBPPublisher:
    """
    Publisher interface for Google Business Profile posts.
    
    This class provides a safe interface for future Google API integration.
    Currently, all publish attempts raise NotImplementedError.
    
    Future implementation will:
    - Authenticate with Google Business Profile API
    - Post content to GBP
    - Handle API errors and retries
    - Track post status
    """
    
    def __init__(self):
        """Initialize the GBP Publisher."""
        self.enabled = False
    
    def publish(self, post: Dict[str, Any]) -> Dict[str, Any]:
        """
        Publish a post to Google Business Profile.
        
        Args:
            post: Dictionary containing post data with:
                - service_name: Name of the service
                - title: Post title
                - body: Post body content
                - (other metadata)
        
        Returns:
            Dictionary with publish result:
                - success: Boolean
                - post_id: Google post ID (if successful)
                - error: Error message (if failed)
        
        Raises:
            NotImplementedError: Always, as live posting is not enabled.
        """
        raise NotImplementedError(
            "Live Google Business Profile posting is not enabled. "
            "This feature requires Google API credentials and explicit enablement."
        )
    
    def is_enabled(self) -> bool:
        """
        Check if publishing is enabled.
        
        Returns:
            False (publishing is always disabled by default)
        """
        return False


class GoogleBusinessProfilePublisher:
    """
    Google Business Profile API Publisher (Disabled).
    
    This class provides the interface for Google Business Profile API integration.
    All methods raise NotImplementedError by default.
    
    Environment placeholders (not required, for documentation):
    - GBP_ACCOUNT_ID: Google Business Profile account ID
    - GBP_LOCATION_ID: Google Business Profile location ID
    - GOOGLE_APPLICATION_CREDENTIALS: Path to Google service account credentials
    
    Future implementation will:
    - Authenticate with Google Business Profile API
    - Post content to specific GBP locations
    - Handle API errors and retries
    - Track post status and performance
    """
    
    def __init__(self):
        """Initialize the Google Business Profile Publisher."""
        self.enabled = False
        # Environment placeholders (not required)
        self.account_id = os.getenv('GBP_ACCOUNT_ID', None)
        self.location_id = os.getenv('GBP_LOCATION_ID', None)
        self.credentials_path = os.getenv('GOOGLE_APPLICATION_CREDENTIALS', None)
    
    def authenticate(self) -> bool:
        """
        Authenticate with Google Business Profile API.
        
        Returns:
            True if authentication successful
        
        Raises:
            NotImplementedError: Always, as authentication is not enabled.
        """
        raise NotImplementedError(
            "Live GBP publishing is disabled. Enable explicitly to proceed."
        )
    
    def publish_post(self, post: Dict[str, Any], location: str = "default") -> Dict[str, Any]:
        """
        Publish a post to Google Business Profile.
        
        Args:
            post: Dictionary containing post data with:
                - service_name: Name of the service
                - title: Post title
                - body: Post body content
                - approved: Boolean indicating if post is approved
                - (other metadata)
            location: Location identifier (default: "default")
        
        Returns:
            Dictionary with publish result:
                - success: Boolean
                - post_id: Google post ID (if successful)
                - location: Location where post was published
                - error: Error message (if failed)
        
        Raises:
            NotImplementedError: Always, as live posting is not enabled.
            RuntimeError: If post is not approved or cadence is violated.
        """
        # Guardrail: Check if post is approved
        if not post.get('approved', False):
            raise RuntimeError(
                "Post must be approved before publishing. "
                "Use gbp.approval agent to approve posts."
            )
        
        # Guardrail: Check cadence (would be checked by agent before calling)
        # This is a defensive check
        if post.get('deferred', False):
            raise RuntimeError(
                "Post is deferred due to cadence violation. "
                "Cannot publish deferred posts."
            )
        
        # Raise NotImplementedError (publishing is disabled)
        raise NotImplementedError(
            "Live GBP publishing is disabled. Enable explicitly to proceed."
        )
    
    def is_enabled(self) -> bool:
        """
        Check if publishing is enabled.
        
        Returns:
            False (publishing is always disabled by default)
        """
        return False
