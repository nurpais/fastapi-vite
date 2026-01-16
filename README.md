# FastAPI + Vite + TailwindCSS Project

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
    │   ├── css/        #  Styles
    │   └── ...
    ├── package.json
    └── vite.config.js
```

## Requirements

- **Node.js:** 22.x or higher
- **Python:** 3.10 or higher
- **Yarn:** 1.22 or higher

## Installation

Make sure you're using Node 22

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
yarn install
```

## Development

Run both servers simultaneously:

**Terminal 1 - Vite dev server:**

```bash
cd frontend
yarn dev
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
yarn build
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
- **Frontend:** Vite, TypeScript, Tailwind CSS
- **Integration:** Vite Manifest for production builds
