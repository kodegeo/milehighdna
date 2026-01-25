# Setup Guide

## Installation

1. **Install Python dependencies:**

```bash
cd agents
pip install -r requirements.txt
```

Or with pip3:

```bash
pip3 install -r requirements.txt
```

## Quick Start

### Test the GBP Post Agent (Dry-Run)

```bash
# Generate posts for all services
python3 -m agents.run gbp.post --dry-run

# Generate post for specific service
python3 -m agents.run gbp.post --service "Legal Paternity DNA Testing" --dry-run
```

### Available Agents

```bash
# List all available agents
python3 -m agents.run --help

# Run specific agents
python3 -m agents.run gbp.post --dry-run
python3 -m agents.run gbp.qa --dry-run
python3 -m agents.run gbp.review --dry-run
python3 -m agents.run seo.sitemap
python3 -m agents.run analytics.gsc_monitor --dry-run
```

## Directory Structure

```
agents/
├── core/                    # Base agent infrastructure
│   ├── __init__.py
│   └── base_agent.py       # BaseAgent class
├── config/                  # Configuration files
│   ├── services.yml        # Service definitions
│   └── posting_rules.yml   # GBP posting rules
├── prompts/                # Prompt templates
│   └── gbp_post.txt        # GBP post generation prompt
├── domains/                # Domain-specific agents
│   ├── gbp/               # Google Business Profile
│   │   ├── post_agent.py  # ✅ Implemented
│   │   ├── qa_agent.py    # Placeholder
│   │   └── review_agent.py # Placeholder
│   ├── seo/               # SEO agents
│   │   └── sitemap_agent.py # Placeholder
│   └── analytics/         # Analytics agents
│       └── gsc_monitor_agent.py # Placeholder
├── state/                  # Agent state persistence
├── logs/                   # Agent log files
├── run.py                  # CLI runner
├── requirements.txt        # Python dependencies
└── README.md               # Documentation
```

## Safety Features

- **Default dry-run**: All agents default to dry-run mode
- **No API calls**: Dry-run mode prevents external API calls
- **Guardrails**: Agents check prerequisites before execution
- **State isolation**: Each agent maintains separate state files

## Next Steps

1. Install dependencies: `pip install -r requirements.txt`
2. Test dry-run: `python3 run.py gbp.post --dry-run`
3. Review generated posts in console output
4. Check logs in `logs/` directory
5. Review state files in `state/` directory

## Troubleshooting

### ModuleNotFoundError: No module named 'yaml'

Install PyYAML:
```bash
pip install PyYAML
```

### Import errors

Make sure you're running from the project root (parent of `agents/`):
```bash
# From project root
python3 -m agents.run gbp.post --dry-run

# Or if you're in the agents directory, go up one level
cd ..
python3 -m agents.run gbp.post --dry-run
```

### Permission errors

Ensure `state/` and `logs/` directories are writable:
```bash
chmod -R 755 state logs
```
