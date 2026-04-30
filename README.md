# Repository

## Overview
The system is built around README generation, inferred from module names, symbols, and imports.

- Detected project type: Backend API
- Parsed source surface: 10 files
- Language profile: py: 8, md: 1, js: 1

## Architecture Flow
1. entrypoint: `app.py`

## Project Structure
- **root/** (4 files)
- **core/** (1 files)
- **mitre/** (2 files)
- **recon/** (2 files)
- **static/** (1 files)

```text
├── README.md
├── __init__.py
├── app.py
├── config.py
├── core
│   └── validator.py
├── mitre
│   ├── intents.py
│   └── mapper.py
├── recon
│   ├── google.py
│   └── passive.py
└── static
    └── app.js
```

## Modules
- **`app.py`**: Entry or orchestration module. Key symbols: `dashboard()`, `generate_plan_api()`.
- **`static/app.js`**: Entry or orchestration module. Key symbols: `executeMission()`, `renderDorkButtons()`, `showGlitchAlert()`.
- **`mitre/mapper.py`**: Entry or orchestration module. Key symbols: `get_intents()`, `resolve_intent()`.
- **`core/validator.py`**: Function-oriented helper/business logic. Key symbols: `validate_domain()`.
- **`recon/google.py`**: Function-oriented helper/business logic. Key symbols: `generate_dorks()`.
- **`README.md`**: Class-oriented domain logic. Key symbols: `names`.
- **`recon/passive.py`**: Function-oriented helper/business logic. Key symbols: `generate_checklist()`.
- **`mitre/intents.py`**: Support module.
- **`config.py`**: Support module.
- **`__init__.py`**: Support module.

## Usage
```bash
python app.py
```
