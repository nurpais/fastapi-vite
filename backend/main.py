import json
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from pathlib import Path
from fastapi.staticfiles import StaticFiles
import os
from vite import ViteAssets

app = FastAPI()
vite = ViteAssets(dev_mode=os.getenv("DEV") == "1")

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")
templates.env.globals["vite"] = vite.tags




    

@app.get("/")
async def home2(request: Request):
    return templates.TemplateResponse("home.html", {"request": request, "title": "Home page", })

@app.get("/admin")
async def admin(request: Request):
    return templates.TemplateResponse("admin.html", {"request": request, "entries": ["admin"]})


