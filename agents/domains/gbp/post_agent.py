"""
Google Business Profile Post Agent

Generates and posts content to Google Business Profile.
Currently operates in dry-run mode only (no API calls).
"""

import json
import yaml
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any, Optional

from agents.core.base_agent import BaseAgent
from agents.domains.gbp.publisher import GBPPublisher


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
    
    def __init__(self, dry_run: bool = True, publisher: Optional[GBPPublisher] = None):
        """
        Initialize the GBP Post Agent.
        
        Args:
            dry_run: If True, no external API calls will be made
            publisher: Optional GBP publisher instance (default: GBPPublisher)
        """
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
        
        # Set up pending posts file path
        self.pending_posts_file = self.state_dir / "gbp_posts_pending.json"
        
        # Set up publisher (dependency injection for testing/future use)
        self.publisher = publisher if publisher is not None else GBPPublisher()
        
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
        # Check base agent guardrails first
        if not super().check_guardrails():
            return False
        
        # Check if live publishing is attempted in dry-run mode
        if self.dry_run:
            # Dry-run mode: publishing is always blocked
            if not self.can_publish_live():
                # This is expected - dry-run mode should block publishing
                pass
        elif not self.dry_run:
            # In live mode, check if publishing is actually enabled
            if not self.can_publish_live():
                self.logger.error(
                    "🚫 Live publishing is blocked. "
                    "Cannot publish in dry-run mode or when publishing is not enabled."
                )
                return False
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
    
    def generate_post(self, service: Dict[str, Any], location: str = "Denver, Colorado") -> Dict[str, Any]:
        """
        Generate a GBP post for a given service and location.
        
        Args:
            service: Service configuration dictionary
            location: Location string (e.g., "Denver, Colorado")
            
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
        
        # Check cadence before generating
        cadence_check = self.check_cadence(service['name'], location)
        
        # In dry-run mode, simulate post generation
        # TODO: Replace with actual LLM call when implementing
        generated_post = self._simulate_post_generation(service, prompt, location)
        
        # Validate post against rules
        validation = self._validate_post(generated_post, service, location)
        
        # Mark as deferred if cadence violated
        deferred = not cadence_check.get('allowed', True)
        if deferred:
            self.logger.warning(
                f"⚠️  Cadence violation for {service['name']} in {location}: "
                f"{cadence_check.get('reason', 'Unknown reason')}"
            )
        
        return {
            "service": service['name'],
            "location": location,
            "post": generated_post,
            "prompt": prompt,
            "validation": validation,
            "character_count": len(generated_post),
            "cadence_allowed": cadence_check.get('allowed', True),
            "cadence_reason": cadence_check.get('reason', ''),
            "deferred": deferred,
            "timestamp": self.state.get("last_post_time")
        }
    
    def _simulate_post_generation(self, service: Dict[str, Any], prompt: str, location: str = "Denver, Colorado") -> str:
        """
        Generate a structured GBP post with title and body.
        
        Args:
            service: Service configuration dictionary
            prompt: Prompt template (unused in current implementation)
            location: Location string (e.g., "Denver, Colorado")
        
        Returns formatted post with:
        - Title (max 58 characters)
        - Blank line
        - Body (2-3 sentences)
        """
        name = service['name']
        
        # Generate title (max 58 characters)
        title = self._generate_title(name)
        
        # Generate body (2-3 sentences, unique per service and location)
        body = self._generate_body(service, location)
        
        # Format: Title, blank line, Body
        post = f"{title}\n\n{body}"
        
        return post
    
    def _generate_title(self, service_name: str) -> str:
        """Generate a title (max 58 characters)."""
        # Create concise title from service name
        # Remove "DNA Testing" if present to save space
        title = service_name.replace(" DNA Testing", "").replace("DNA Testing", "")
        
        # If still too long, create shorter version
        if len(title) > 58:
            # Try common abbreviations
            title = title.replace("Paternity", "Paternity")
            title = title.replace("Testing", "Test")
            
            # If still too long, truncate
            if len(title) > 58:
                # Keep first 55 chars and add ellipsis
                title = title[:55].rstrip() + "..."
        
        return title
    
    def _generate_body(self, service: Dict[str, Any], location: str = "Denver, Colorado") -> str:
        """
        Generate body content (2-3 sentences) unique per service.
        
        Args:
            service: Service configuration dictionary
            location: Location string (e.g., "Denver, Colorado")
        """
        name = service['name']
        description = service['description']
        
        # Extract city name from location (e.g., "Denver, Colorado" -> "Denver")
        city = location.split(',')[0].strip() if ',' in location else location.split()[0]
        
        # Service-specific content generation
        # Each service gets unique wording to avoid repetition
        
        if "Legal Paternity" in name:
            sentence1 = f"{name} is used when verified biological parenthood is required for court or legal documentation."
            sentence2 = "This testing follows strict chain-of-custody procedures and produces court-admissible results."
            sentence3 = "View appointment options."
            trust_signal = None  # Already mentioned in sentence2
        
        elif "Peace of Mind" in name:
            sentence1 = f"{name} provides personal confirmation of biological parenthood without legal documentation requirements."
            sentence2 = "This testing option is designed for individuals seeking private knowledge and family clarity."
            sentence3 = "View appointment options."
            trust_signal = None
        
        elif "Prenatal" in name:
            sentence1 = f"{name} determines biological parenthood during pregnancy using non-invasive DNA analysis."
            sentence2 = "Testing is available as early as 6 weeks into pregnancy and is commonly chosen when early answers are needed."
            sentence3 = "View appointment options."
            trust_signal = None
        
        elif "Immigration" in name:
            sentence1 = f"{name} supports USCIS, embassy, and consular cases that require verified biological relationships."
            sentence2 = "Testing is conducted through an AABB-accredited laboratory and follows strict protocols required for immigration applications."
            sentence3 = "View appointment options."
            trust_signal = None  # Already mentioned in sentence2
        
        elif "Siblingship" in name:
            sentence1 = f"{name} evaluates whether individuals share a full or half-sibling biological relationship."
            sentence2 = "This type of testing is often used when one or both parents are unavailable for comparison."
            sentence3 = "View appointment options."
            trust_signal = None
        
        elif "Grandparentage" in name:
            sentence1 = f"{name} helps establish biological relationships between grandparents and grandchildren when a parent cannot be tested."
            sentence2 = "This service is commonly used in legal cases, family verification situations, and extended relationship analysis."
            sentence3 = "View appointment options."
            trust_signal = None
        
        elif "Avuncular" in name:
            sentence1 = f"{name} examines biological relationships through an aunt or uncle when direct parent testing is not possible."
            sentence2 = "This method is used to evaluate extended family relationships and provide clarity in complex family situations."
            sentence3 = "View appointment options."
            trust_signal = None
        
        elif "Forensic" in name:
            sentence1 = f"{name} involves advanced genetic testing for complex cases, including legal investigations and specialized relationship analysis."
            sentence2 = "This service may include enhanced testing methods and expert-level interpretation depending on case requirements."
            sentence3 = "View appointment options."
            trust_signal = None
        
        elif "Discreet" in name:
            sentence1 = f"{name} offers confidential DNA analysis for sensitive personal situations."
            sentence2 = "This option allows testing using personal items or submitted samples and is intended for private, non-legal use."
            sentence3 = "View appointment options."
            trust_signal = None
        
        else:
            # Fallback for unknown services
            sentence1 = f"{name} is available in Denver, Colorado."
            sentence2 = description
            sentence3 = "View appointment options."
            trust_signal = None
        
        # Add location reference naturally (once) if not already present
        body_sentences = [sentence1, sentence2]
        
        # Check if location is mentioned
        combined = sentence1 + " " + sentence2
        location_parts = location.split(',')
        city = location_parts[0].strip()
        state = location_parts[1].strip() if len(location_parts) > 1 else ""
        
        has_location = city in combined or (state and state in combined)
        
        if not has_location:
            # Add location naturally to first sentence
            if sentence1.endswith('.'):
                sentence1 = sentence1[:-1] + f" in {location}."
            else:
                sentence1 += f" in {location}."
            body_sentences[0] = sentence1
        
        # Add optional trust signal sentence if not already included
        if trust_signal:
            body_sentences.append(f"This testing is performed by an {trust_signal.lower()}.")
        
        # Add CTA as final sentence
        body_sentences.append(sentence3)
        
        # Join sentences
        body = " ".join(body_sentences)
        
        return body
    
    def _validate_post(self, post: str, service: Dict[str, Any], location: str = "Denver, Colorado") -> Dict[str, Any]:
        """Validate generated post against posting rules."""
        rules = self.posting_rules.get('rules', {})
        validation = {
            "valid": True,
            "errors": [],
            "warnings": [],
            "failed_rules": []
        }
        
        post_lower = post.lower()
        
        # Check for forbidden phrases
        forbidden_phrases = [
            "ensures",
            "perfect for",
            "guaranteed",
            "fastest",
            "best",
            "results you can trust"
        ]
        
        for phrase in forbidden_phrases:
            if phrase in post_lower:
                validation["valid"] = False
                validation["errors"].append(f"Forbidden phrase found: '{phrase}'")
                validation["failed_rules"].append(f"forbidden_phrase:{phrase}")
        
        # Check for multiple cities in same sentence (forbidden)
        # Look for patterns like "Denver, Aurora" or "Denver, Lakewood"
        import re
        city_patterns = [
            r"denver,\s*(aurora|lakewood|englewood|thornton|westminster)",
            r"(aurora|lakewood|englewood|thornton|westminster),\s*(and\s+)?throughout"
        ]
        for pattern in city_patterns:
            if re.search(pattern, post_lower):
                validation["valid"] = False
                validation["errors"].append("Multiple cities listed in same sentence")
                validation["failed_rules"].append("multiple_cities_in_sentence")
        
        # Check title length (max 58 characters)
        lines = post.split('\n')
        if lines:
            title = lines[0].strip()
            if len(title) > 58:
                validation["valid"] = False
                validation["errors"].append(f"Title too long ({len(title)} > 58 chars)")
                validation["failed_rules"].append("title_too_long")
        
        # Check total length
        min_len = rules.get('min_length', 100)
        max_len = rules.get('max_length', 1500)
        
        if len(post) < min_len:
            validation["valid"] = False
            validation["errors"].append(f"Post too short ({len(post)} < {min_len} chars)")
            validation["failed_rules"].append("post_too_short")
        
        if len(post) > max_len:
            validation["valid"] = False
            validation["errors"].append(f"Post too long ({len(post)} > {max_len} chars)")
            validation["failed_rules"].append("post_too_long")
        
        # Check required elements
        must_include = rules.get('must_include', [])
        if 'service_name' in must_include:
            # Check if service name or key part is present
            service_keywords = service['name'].split()[:2]  # First 2 words
            if not any(keyword.lower() in post_lower for keyword in service_keywords):
                validation["warnings"].append("Service name not clearly present")
        
        if 'location_reference' in must_include:
            locations = ['denver', 'colorado']
            if not any(loc in post_lower for loc in locations):
                validation["valid"] = False
                validation["errors"].append("Location reference (Denver, Colorado) missing")
                validation["failed_rules"].append("location_reference_missing")
        
        if 'call_to_action' in must_include:
            # Check for the specific allowed CTA
            if "view appointment options" not in post_lower:
                validation["valid"] = False
                validation["errors"].append("Required CTA 'View appointment options' missing")
                validation["failed_rules"].append("cta_missing")
        
        # Check for Denver/Colorado mention (should be exactly once, naturally)
        denver_count = post_lower.count("denver")
        colorado_count = post_lower.count("colorado")
        if denver_count == 0 or colorado_count == 0:
            validation["warnings"].append("Denver, Colorado should be mentioned naturally")
        
        return validation
    
    def _load_pending_posts(self) -> List[Dict[str, Any]]:
        """Load existing pending posts from JSON file."""
        if self.pending_posts_file.exists():
            try:
                with open(self.pending_posts_file, 'r') as f:
                    return json.load(f)
            except (json.JSONDecodeError, IOError) as e:
                self.logger.warning(f"Failed to load pending posts: {e}. Starting fresh.")
                return []
        return []
    
    def _save_pending_post(self, post_data: Dict[str, Any], service: Dict[str, Any], location: str = "Denver, Colorado") -> None:
        """Save a generated post to the pending posts file."""
        # Parse post to extract title and body
        # Format: Title (first line), blank line, Body (remaining lines)
        post_content = post_data['post']
        lines = [line for line in post_content.split('\n') if line.strip()]  # Remove empty lines
        
        title = lines[0].strip() if lines else ""
        # Body is everything after the first line (skip blank line)
        body_lines = post_content.split('\n')
        if len(body_lines) > 2:
            # Skip first line (title) and blank line, join rest
            body = '\n'.join(body_lines[2:]).strip()
        elif len(body_lines) == 1:
            # Only title, no body
            body = ""
        else:
            # Title and body on separate lines (no blank line)
            body = '\n'.join(body_lines[1:]).strip()
        
        # Create post object
        pending_post = {
            "service_name": service['name'],
            "location": location,
            "title": title,
            "body": body,
            "character_count": post_data['character_count'],
            "validation_passed": post_data['validation']['valid'],
            "validation_errors": post_data['validation']['errors'] if not post_data['validation']['valid'] else [],
            "generated_at": datetime.now().isoformat(),
            "approved": False,
            "rejected": False,
            "deferred": post_data.get('deferred', False),
            "cadence_allowed": post_data.get('cadence_allowed', True)
        }
        
        # Load existing posts
        pending_posts = self._load_pending_posts()
        
        # Append new post (don't overwrite existing)
        pending_posts.append(pending_post)
        
        # Save back to file
        try:
            with open(self.pending_posts_file, 'w') as f:
                json.dump(pending_posts, f, indent=2)
            self.logger.info(f"✅ Post saved to {self.pending_posts_file} for review")
        except IOError as e:
            self.logger.error(f"Failed to save pending post: {e}")
    
    def execute(self, service_name: Optional[str] = None, export: bool = False, location: Optional[str] = None) -> Dict[str, Any]:
        """
        Execute the post generation process.
        
        Args:
            service_name: Optional specific service to generate post for.
                        If None, generates for all services.
            export: If True, save generated posts to gbp_posts_pending.json
            location: Optional specific location. If None, generates for all locations in service config.
        
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
            # Get locations for this service
            service_locations = service.get('locations', ["Denver, Colorado"])
            if location:
                # Use specified location if provided
                locations_to_process = [location] if location in service_locations else [location]
            else:
                # Use all locations from config
                locations_to_process = service_locations
            
            # Generate post for each location
            for loc in locations_to_process:
                try:
                    post_data = self.generate_post(service, location=loc)
                    
                    if post_data['validation']['valid']:
                        results["posts_generated"].append(post_data)
                        
                        # In dry-run mode, just log the post
                        if self.dry_run:
                            cadence_status = "✅ Allowed" if post_data.get('cadence_allowed', True) else "⚠️  Deferred"
                            self.logger.info(f"🔒 DRY-RUN: Generated post for {service['name']} in {loc}")
                            self.logger.info(f"Post content: {post_data['post']}")
                            print(f"\n{'='*60}")
                            print(f"POST FOR: {service['name']} - {loc}")
                            print(f"{'='*60}")
                            print(post_data['post'])
                            print(f"\nCharacter count: {post_data['character_count']}")
                            print(f"Cadence: {cadence_status}")
                            if post_data.get('cadence_reason'):
                                print(f"Cadence reason: {post_data['cadence_reason']}")
                            print(f"Validation: {'✅ Valid' if post_data['validation']['valid'] else '❌ Invalid'}")
                            if post_data['validation']['errors']:
                                print(f"Errors: {', '.join(post_data['validation']['errors'])}")
                            if post_data['validation']['failed_rules']:
                                print(f"Failed rules: {', '.join(post_data['validation']['failed_rules'])}")
                            if post_data['validation']['warnings']:
                                print(f"Warnings: {', '.join(post_data['validation']['warnings'])}")
                            print(f"{'='*60}\n")
                            
                            # Save to pending posts if export is enabled
                            if export:
                                self._save_pending_post(post_data, service, location=loc)
                        else:
                            # Live mode: Attempt to publish (will raise error if not enabled)
                            if not self.dry_run:
                                # Check guardrails before attempting to publish
                                if not self.can_publish_live():
                                    raise RuntimeError(
                                        "Live publishing is blocked in dry-run mode. "
                                        "Cannot publish when dry_run=True."
                                    )
                                
                                # Attempt to publish (will raise NotImplementedError)
                                try:
                                    # Parse post to extract title and body
                                    post_lines = post_data['post'].split('\n')
                                    title = post_lines[0] if post_lines else ""
                                    body = '\n'.join(post_lines[2:]) if len(post_lines) > 2 else post_data['post']
                                    
                                    publish_result = self.publisher.publish({
                                        "service_name": service['name'],
                                        "location": loc,
                                        "title": title,
                                        "body": body,
                                        "character_count": post_data['character_count'],
                                        "approved": False  # Would check from pending posts
                                    })
                                    results["posts_posted"].append({
                                        **post_data,
                                        "publish_result": publish_result
                                    })
                                except NotImplementedError as e:
                                    self.logger.error(f"Publishing not enabled: {e}")
                                    results["errors"].append({
                                        "service": service['name'],
                                        "location": loc,
                                        "error": str(e)
                                    })
                            else:
                                # This should never happen due to guardrails, but defensive check
                                raise RuntimeError(
                                    "Live publishing is blocked in dry-run mode. "
                                    "Cannot publish when dry_run=True."
                                )
                    else:
                        results["errors"].append({
                            "service": service['name'],
                            "location": loc,
                            "errors": post_data['validation']['errors']
                        })
                        self.logger.error(f"Post validation failed for {service['name']} in {loc}")
                        
                except Exception as e:
                    self.logger.error(f"Error generating post for {service['name']} in {loc}: {e}")
                    results["errors"].append({
                        "service": service['name'],
                        "location": loc,
                        "error": str(e)
                    })
        
        results["total_generated"] = len(results["posts_generated"])
        results["total_errors"] = len(results["errors"])
        
        return results
