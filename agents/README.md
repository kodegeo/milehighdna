# Agents Framework

Multi-domain agent framework for GBP, SEO, content, and analytics automation.

## Architecture

```
agents/
├── core/              # Base agent classes and shared logic
├── config/            # Configuration files (YAML)
├── prompts/           # Prompt templates
├── domains/           # Domain-specific agents
│   ├── gbp/          # Google Business Profile agents
│   ├── seo/          # SEO agents
│   └── analytics/    # Analytics agents
├── state/             # Agent state persistence
├── logs/              # Agent log files
└── run.py             # CLI runner
```

## Features

- **Dry-run mode**: All agents default to dry-run (no external API calls)
- **State persistence**: Agents can save and resume state
- **Structured logging**: All agents log to files and console
- **Guardrails**: Safety checks before execution
- **Extensible**: Easy to add new agents and domains

## Usage

### Running Agents

```bash
# Run GBP post agent (dry-run)
python run.py gbp.post --dry-run

# Run for specific service
python run.py gbp.post --service "Legal Paternity DNA Testing"

# Run other agents
python run.py gbp.qa --dry-run
python run.py seo.sitemap
python run.py analytics.gsc_monitor --dry-run
```

### Live Mode (⚠️ WARNING)

```bash
# Run in live mode (makes actual API calls)
python run.py gbp.post --live
```

**Note**: Live mode is currently blocked for safety. Agents will need API credentials and implementation before enabling.

## Agents

### GBP (Google Business Profile)

- **gbp.post**: Generate and post content to GBP
- **gbp.qa**: Manage Q&A on GBP (placeholder)
- **gbp.review**: Monitor and respond to reviews (placeholder)

### SEO

- **seo.sitemap**: Validate and monitor XML sitemaps (placeholder)

### Analytics

- **analytics.gsc_monitor**: Monitor Google Search Console data (placeholder)

## Configuration

### Services (`config/services.yml`)

Defines DNA testing services with descriptions and keywords.

### Posting Rules (`config/posting_rules.yml`)

Defines constraints and guidelines for GBP post generation.

## Development

### Adding a New Agent

1. Create agent class in appropriate domain folder
2. Inherit from `BaseAgent`
3. Implement `execute()` method
4. Register in `run.py` AGENTS dictionary

### Example

```python
from ...core.base_agent import BaseAgent

class MyAgent(BaseAgent):
    def __init__(self, dry_run=True):
        super().__init__("my.agent", dry_run=dry_run)
    
    def execute(self, *args, **kwargs):
        # Your agent logic here
        return {"success": True}
```

## Safety

- **Default dry-run**: All agents default to dry-run mode
- **No hardcoded secrets**: Use environment variables
- **Guardrails**: Agents check prerequisites before execution
- **State isolation**: Each agent maintains separate state

## Future Enhancements

- LLM integration for content generation
- Google API integrations
- Scheduling and automation
- Performance tracking
- Approval workflows
