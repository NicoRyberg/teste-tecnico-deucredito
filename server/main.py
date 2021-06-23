from fastapi import FastAPI
import json

# local imports
from server import config


app = FastAPI()

# data
with open("server/salesorders.json") as f:
    salesorders = json.load(f)


with open("server/invoices.json") as g:
    invoices = json.load(g)


@app.get('/')
async def main():
    """Deployment health check"""
    return {
        'health_check': 'ok',
        'version': config.SERVER_VERSION
    }


@app.get('/salesorders')
async def get_salesorders():
    filters = [
        'id', 'customerid', 'extended', 'discount', 'uom',
        'subtransactions', 'transactionnumber',
        'transactiondate', 'paymentterms'
        ]

    salesorders_filter = [
        {
            _filter: element[_filter] for _filter in filters
        }
        for element in salesorders
    ]
    return {"salesorders": salesorders_filter}


@app.get('/invoices')
async def get_salesorder():
    filters = [
        'quantity', 'customerid', 'extended', 'discount',
        'purchasingunits', 'invoicedate',
        'itemname', 'category'
        ]

    invoices_filter = [
        {
            _filter: element[_filter] for _filter in filters
        }
        for element in invoices
    ]
    return {"invoices": invoices_filter}
