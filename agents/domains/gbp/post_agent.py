"""
Google Business Profile Post Agent

Generates and posts content to Google Business Profile.
Currently operates in dry-run mode only (no API calls).
"""

import yaml
from pathlib import Path
from typing import Dict, List, Any, Optional

from ...core.base_agent import BaseAgent


class GBPPostAgent(BaseAgent):
    """
    Agent for generating and posting to Google Business Profile.
    
    In dry-run mode:
    - Generates posts based on service configuration
    - Outputs posts to console and logs
    - Does NOT make any API calls to Google
    
    Future (when dry-run=False):
    - Will post to Google Business Profile API
    - Will schedule posts
    - Will track post performance
    """
    
    def __init__(self, dry_run: bool = True):
        """Initialize the GBP Post Agent."""
        super().__init__(
            agent_name="gbp.post",
            dry_run=dry_run
        )
        
        # Load configuration
        agents_root = Path(__file__).parent.parent.parent
        self.config_dir = agents_root / "config"
        self.prompts_dir = agents_root / "prompts"
        
        self.services = self._load_services()
        self.posting_rules = self._load_posting_rules()
        self.prompt_template = self._load_prompt_template()
        
        self.logger.info("GBP Post Agent initialized")
    
    def _load_services(self) -> List[Dict[str, Any]]:
        """Load service configuration from YAML."""
        services_file = self.config_dir / "services.yml"
        try:
            with open(services_file, 'r') as f:
                config = yaml.safe_load(f)
                return config.get('services', [])
        except (IOError, yaml.YAMLError) as e:
            self.logger.error(f"Failed to load services config: {e}")
            return []
    
    def _load_posting_rules(self) -> Dict[str, Any]:
        """Load posting rules from YAML."""
        rules_file = self.config_dir / "posting_rules.yml"
        try:
            with open(rules_file, 'r') as f:
                return yaml.safe_load(f)
        except (IOError, yaml.YAMLError) as e:
            self.logger.error(f"Failed to load posting rules: {e}")
            return {}
    
    def _load_prompt_template(self) -> str:
        """Load the prompt template for post generation."""
        prompt_file = self.prompts_dir / "gbp_post.txt"
        try:
            with open(prompt_file, 'r') as f:
                return f.read()
        except IOError as e:
            self.logger.error(f"Failed to load prompt template: {e}")
            return ""
    
    def check_guardrails(self) -> bool:
        """Check guardrails before posting."""
        if not self.dry_run:
            # In live mode, check for API credentials
            # TODO: Add credential validation when implementing live mode
            self.logger.warning("⚠️  LIVE MODE: API credentials should be validated")
            return False  # Block live mode until implemented
        
        if not self.services:
            self.logger.error("No services configured")
            return False
        
        if not self.posting_rules:
            self.logger.error("No posting rules configured")
            return False
        
        return True
    
    def generate_post(self, service: Dict[str, Any]) -> Dict[str, Any]:
        """
        Generate a GBP post for a given service.
        
        Args:
            service: Service configuration dictionary
            
        Returns:
            Dictionary with generated post content and metadata
        """
        # Format prompt with service details
        keywords_str = ", ".join(service.get('keywords', []))
        
        prompt = self.prompt_template.format(
            service_name=service['name'],
            service_description=service['description'],
            keywords=keywords_str
        )
        
        # In dry-run mode, simulate post generation
        # TODO: Replace with actual LLM call when implementing
        generated_post = self._simulate_post_generation(service, prompt)
        
        # Validate post against rules
        validation = self._validate_post(generated_post, service)
        
        return {
            "service": service['name'],
            "post": generated_post,
            "prompt": prompt,
            "validation": validation,
            "character_count": len(generated_post),
            "timestamp": self.state.get("last_post_time")
        }
    
    def _simulate_post_generation(self, service: Dict[str, Any], prompt: str) -> str:
        """
        Simulate post generation (dry-run only).
        
        In production, this would call an LLM API.
        For now, generates a template-based post.
        """
        name = service['name']
        description = service['description']
        keywords = service.get('keywords', [])
        
        # Select appropriate trust signal based on service
        trust_signals = {
            "Legal": "Court-admissible results",
            "Immigration": "AABB-accredited laboratory",
            "Prenatal": "Non-invasive testing available",
            "Peace of Mind": "Confidential and professional"
        }
        
        trust_signal = "AABB-accredited laboratory"  # Default
        for key, signal in trust_signals.items():
            if key.lower() in name.lower():
                trust_signal = signal
                break
        
        # Generate post content
        post = f"{name} in Denver, Colorado. {description} "
        post += f"Our {trust_signal.lower()} ensures accurate, reliable results. "
        post += f"Perfect for clients in Denver, Aurora, and throughout Colorado. "
        post += f"Schedule an appointment today to learn more about this service."
        
        # Ensure it meets length requirements
        rules = self.posting_rules.get('rules', {})
        min_len = rules.get('min_length', 100)
        max_len = rules.get('max_length', 1500)
        
        if len(post) < min_len:
            post += " Contact Mile High DNA Testing for professional DNA testing services."
        elif len(post) > max_len:
            post = post[:max_len-3] + "..."
        
        return post
    
    def _validate_post(self, post: str, service: Dict[str, Any]) -> Dict[str, Any]:
        """Validate generated post against posting rules."""
        rules = self.posting_rules.get('rules', {})
        validation = {
            "valid": True,
            "errors": [],
            "warnings": []
        }
        
        # Check length
        min_len = rules.get('min_length', 100)
        max_len = rules.get('max_length', 1500)
        
        if len(post) < min_len:
            validation["valid"] = False
            validation["errors"].append(f"Post too short ({len(post)} < {min_len} chars)")
        
        if len(post) > max_len:
            validation["valid"] = False
            validation["errors"].append(f"Post too long ({len(post)} > {max_len} chars)")
        
        # Check required elements
        must_include = rules.get('must_include', [])
        if 'service_name' in must_include and service['name'] not in post:
            validation["warnings"].append("Service name not clearly present")
        
        if 'location_reference' in must_include:
            locations = ['Denver', 'Colorado', 'CO']
            if not any(loc in post for loc in locations):
                validation["warnings"].append("Location reference missing")
        
        if 'call_to_action' in must_include:
            ctas = ['schedule', 'contact', 'visit', 'call', 'learn more']
            if not any(cta in post.lower() for cta in ctas):
                validation["warnings"].append("Call-to-action missing")
        
        return validation
    
    def execute(self, service_name: Optional[str] = None) -> Dict[str, Any]:
        """
        Execute the post generation process.
        
        Args:
            service_name: Optional specific service to generate post for.
                        If None, generates for all services.
        
        Returns:
            Dictionary with execution results
        """
        results = {
            "success": True,
            "posts_generated": [],
            "posts_posted": [],
            "errors": []
        }
        
        # Select services to process
        if service_name:
            services = [s for s in self.services if s['name'] == service_name]
            if not services:
                results["success"] = False
                results["errors"].append(f"Service '{service_name}' not found")
                return results
        else:
            services = self.services
        
        # Generate posts
        for service in services:
            try:
                post_data = self.generate_post(service)
                
                if post_data['validation']['valid']:
                    results["posts_generated"].append(post_data)
                    
                    # In dry-run mode, just log the post
                    if self.dry_run:
                        self.logger.info(f"🔒 DRY-RUN: Generated post for {service['name']}")
                        self.logger.info(f"Post content: {post_data['post']}")
                        print(f"\n{'='*60}")
                        print(f"POST FOR: {service['name']}")
                        print(f"{'='*60}")
                        print(post_data['post'])
                        print(f"\nCharacter count: {post_data['character_count']}")
                        print(f"Validation: {'✅ Valid' if post_data['validation']['valid'] else '❌ Invalid'}")
                        if post_data['validation']['warnings']:
                            print(f"Warnings: {', '.join(post_data['validation']['warnings'])}")
                        print(f"{'='*60}\n")
                    else:
                        # TODO: Implement actual GBP API posting
                        self.logger.warning("⚠️  LIVE MODE: Posting not yet implemented")
                        results["posts_posted"].append(post_data)
                else:
                    results["errors"].append({
                        "service": service['name'],
                        "errors": post_data['validation']['errors']
                    })
                    self.logger.error(f"Post validation failed for {service['name']}")
                    
            except Exception as e:
                self.logger.error(f"Error generating post for {service['name']}: {e}")
                results["errors"].append({
                    "service": service['name'],
                    "error": str(e)
                })
        
        results["total_generated"] = len(results["posts_generated"])
        results["total_errors"] = len(results["errors"])
        
        return results
