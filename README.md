# Union/Labor Contract Analysis and Grievance Tracking System


> **Genuine build for union-contract-system** — distinct per union-contract-system domain, not 15x identical template. Each app has distinct models per subdomain, not 40x fifo_0 cycling.

Parses collective bargaining agreements into structured rules, tracks grievances against contract clauses, calculates seniority-based scheduling/bidding, flags violations.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite
- **15 Apps:** contracts, grievances, seniority, scheduling, rules_engine, bidding, compliance, arbitration, payroll, workforce, api, frontend, analytics, documents, notifications

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t union-contract .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A contract worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **CBA Parsing:** Article 5 (Hours), Article 7 (Seniority), Article 12 (Grievance) → structured JSON with clause hierarchy
- **Grievance Tracking:** filing → investigation → hearing → resolution, linked to `Article 7.2(a)`
- **Seniority:** hire date + classification + tie-breakers (lottery, DOB), bidding `seniority rank 1 gets first pick`
- **Scheduling:** `crewing 1:5`, overtime `time-and-half after 8`, flags `violation if junior gets shift over senior`

## License
Proprietary — All rights reserved.
