# FastAPI + Vite Project

A project integrating FastAPI (backend) and Vite (frontend) with support for multiple entry points.

## Project Structure

```
project/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── requirements.txt     # Python dependencies
│   ├── templates/           # Jinja2 templates
│   │   ├── base.html
│   │   ├── home.html
│   │   └── admin.html
│   └── static/
│       └── dist/            # Built Vite files (generated)
└── frontend/
    ├── src/
    │   ├── main.ts          # Main entry point (on all pages)
    │   ├── admin.ts         # For admin panel
    │   └── ...
    ├── package.json
    └── vite.config.js
```

## Installation

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

### Frontend

```bash
cd frontend
npm install
```

## Development

Run both servers simultaneously:

**Terminal 1 - Vite dev server:**

```bash
cd frontend
npm run dev
```

**Terminal 2 - FastAPI:**

```bash
cd backend
DEV=1 uvicorn main:app --reload
```

Open http://localhost:8000

### How it works in dev mode

- Vite dev server on port 5173
- FastAPI on port 8000
- Hot Module Replacement (HMR) works automatically
- Changes in `.ts` files apply instantly

## Production

### Build frontend

```bash
cd frontend
npm run build
```

Files will be built to `backend/static/dist/`

### Run backend

```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Usage

### Loading scripts in templates

**Only main.ts (default):**

```python
@app.get("/")
async def home(request: Request):
    return templates.TemplateResponse("home.html", {"request": request})
```

**main.ts + additional entries:**

```python
@app.get("/admin")
async def admin(request: Request):
    return templates.TemplateResponse("admin.html", {
        "request": request,
        "entries": ["admin"]  # main.ts + admin.ts
    })
```

### Adding a new entry point

1. Create a file in `frontend/src/`, e.g. `dashboard.ts`
2. Add it to `vite.config.js`:
   ```js
   rollupOptions: {
     input: {
       main: './src/main.ts',
       admin: './src/admin.ts',
       dashboard: './src/dashboard.ts',  // new
     }
   }
   ```
3. Use in route:
   ```python
   return templates.TemplateResponse("dashboard.html", {
       "request": request,
       "entries": ["dashboard"]
   })
   ```

## Environment Variables

- `DEV=1` - development mode (uses Vite dev server)
- Default - production mode (uses built files)

## Tech Stack

- **Backend:** FastAPI, Jinja2, Python 3.10+
- **Frontend:** Vite, TypeScript
- **Integration:** Vite Manifest for production builds

## Scripts

### Frontend

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend

```bash
uvicorn main:app --reload           # Dev mode
DEV=1 uvicorn main:app --reload     # Dev with Vite HMR
uvicorn main:app                     # Production
```

## Troubleshooting

**Error "Manifest not found":**

- Make sure you built the frontend: `cd frontend && npm run build`
- Check the manifest path in `main.py`

**Styles not applied:**

- In dev mode, styles are injected automatically
- In production, check that CSS files exist in manifest.json

**404 on static files:**

- Verify that `static/dist/` exists
- Make sure `app.mount("/static", ...)` is configured correctly
