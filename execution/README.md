# Execution (Layer 3: Doing the work)

This folder contains deterministic Python scripts that handle API calls, data transformation, validation, and file operations.

## Guidelines
- **Deterministic**: Scripts must produce consistent, reproducible output.
- **Self-contained & Well-commented**: Every script should handle its own arguments and errors gracefully.
- **Environment**: Read keys and configurations from `.env` or arguments.
- **Intermediates**: Write intermediate files to `.tmp/`.
