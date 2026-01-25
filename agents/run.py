#!/usr/bin/env python3
"""
Agent Runner CLI

Allows running agents via command line:
    python -m agents.run gbp.post --dry-run
    python -m agents.run gbp.post --service "Legal Paternity DNA Testing"
    python -m agents.run gbp.qa --dry-run
    python -m agents.run seo.sitemap
    python -m agents.run analytics.gsc_monitor
"""

import argparse
import sys

from agents.domains.gbp.post_agent import GBPPostAgent
from agents.domains.gbp.approval_agent import GBPApprovalAgent
from agents.domains.gbp.qa_agent import GBPQAAgent
from agents.domains.gbp.review_agent import GBPReviewAgent
from agents.domains.seo.sitemap_agent import SEOSitemapAgent
from agents.domains.analytics.gsc_monitor_agent import GSCMonitorAgent


# Agent registry
AGENTS = {
    "gbp.post": GBPPostAgent,
    "gbp.approval": GBPApprovalAgent,
    "gbp.qa": GBPQAAgent,
    "gbp.review": GBPReviewAgent,
    "seo.sitemap": SEOSitemapAgent,
    "analytics.gsc_monitor": GSCMonitorAgent,
}


def parse_args():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(
        description="Run agents for GBP, SEO, content, and analytics",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python -m agents.run gbp.post --dry-run
  python -m agents.run gbp.post --service "Legal Paternity DNA Testing"
  python -m agents.run gbp.post --dry-run --export
  python -m agents.run gbp.qa --dry-run
  python -m agents.run seo.sitemap
  python -m agents.run analytics.gsc_monitor --dry-run
        """
    )
    
    parser.add_argument(
        "agent",
        choices=list(AGENTS.keys()),
        help="Agent to run (e.g., gbp.post, gbp.qa, seo.sitemap)"
    )
    
    parser.add_argument(
        "--dry-run",
        action="store_true",
        default=True,
        help="Run in dry-run mode (no external API calls) [default: True]"
    )
    
    parser.add_argument(
        "--live",
        action="store_true",
        help="Run in live mode (WARNING: Makes actual API calls)"
    )
    
    parser.add_argument(
        "--service",
        type=str,
        help="Specific service name (for gbp.post agent)"
    )
    
    parser.add_argument(
        "--export",
        action="store_true",
        help="Save generated posts to gbp_posts_pending.json for review (dry-run only)"
    )
    
    parser.add_argument(
        "--approve",
        action="store_true",
        help="Approve a post (for gbp.approval agent)"
    )
    
    parser.add_argument(
        "--reject",
        action="store_true",
        help="Reject a post (for gbp.approval agent)"
    )
    
    parser.add_argument(
        "--reason",
        type=str,
        default="",
        help="Reason for rejection (for gbp.approval agent)"
    )
    
    parser.add_argument(
        "--location",
        type=str,
        help="Specific location (for gbp.post agent)"
    )
    
    return parser.parse_args()


def main():
    """Main entry point for agent runner."""
    args = parse_args()
    
    # Determine dry-run mode
    dry_run = not args.live if args.live else args.dry_run
    
    if not dry_run:
        print("⚠️  WARNING: Running in LIVE mode. This will make actual API calls.")
        response = input("Are you sure? (yes/no): ")
        if response.lower() != "yes":
            print("Aborted.")
            return
    
    # Get agent class
    agent_class = AGENTS.get(args.agent)
    if not agent_class:
        print(f"❌ Unknown agent: {args.agent}")
        print(f"Available agents: {', '.join(AGENTS.keys())}")
        sys.exit(1)
    
    # Initialize agent
    try:
        agent = agent_class(dry_run=dry_run)
    except Exception as e:
        print(f"❌ Failed to initialize agent: {e}")
        sys.exit(1)
    
    # Prepare execution arguments
    exec_kwargs = {}
    if args.service:
        if args.agent == "gbp.post":
            exec_kwargs["service_name"] = args.service
        elif args.agent == "gbp.approval":
            exec_kwargs["service_name"] = args.service
    
    if args.export and args.agent == "gbp.post":
        exec_kwargs["export"] = True
    
    if args.agent == "gbp.approval":
        exec_kwargs["approve"] = args.approve
        exec_kwargs["reject"] = args.reject
        exec_kwargs["reason"] = args.reason
    
    if args.location and args.agent == "gbp.post":
        exec_kwargs["location"] = args.location
    
    # Run agent
    print(f"\n🚀 Running {args.agent} (dry_run={dry_run})...\n")
    try:
        result = agent.run(**exec_kwargs)
        
        # Print results
        print(f"\n{'='*60}")
        print(f"EXECUTION RESULTS")
        print(f"{'='*60}")
        print(f"Agent: {result.get('agent', 'unknown')}")
        print(f"Success: {result.get('success', False)}")
        print(f"Dry Run: {result.get('dry_run', True)}")
        
        if result.get('success'):
            print("\n✅ Execution completed successfully")
            if 'posts_generated' in result:
                print(f"Posts generated: {result.get('total_generated', 0)}")
            if 'errors' in result and result['errors']:
                print(f"Errors: {result.get('total_errors', 0)}")
        else:
            print(f"\n❌ Execution failed: {result.get('error', 'Unknown error')}")
        
        print(f"{'='*60}\n")
        
        # Exit with appropriate code
        sys.exit(0 if result.get('success', False) else 1)
        
    except KeyboardInterrupt:
        print("\n\n⚠️  Interrupted by user")
        sys.exit(130)
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
