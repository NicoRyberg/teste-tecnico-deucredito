from server.models import Invoices, Products
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

import json


# local imports
from server import config


app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static")

# data
with open("data/products.json") as f:
    products = json.load(f)


with open("data/invoices.json") as g:
    invoices = json.load(g)


@app.get('/')
async def main():
    """Deployment health check"""
    return {
        'health_check': 'ok',
        'version': config.SERVER_VERSION
    }


@app.get('/products', response_model=Products)
async def get_products():
    """Returns a list of dictionaries from the salesorder db"""
    return {'products': products}


@app.get('/invoices', response_model=Invoices)
async def get_invoices():
    """Returns a list of dictionaries from the invoices db"""
    return {'invoices': invoices}


@app.get('/dashboard', response_class=HTMLResponse)
async def render_dashboard(request: Request):
    """Returns the dashboard page"""
    return templates.TemplateResponse("dashboard.html", {"request": request})
