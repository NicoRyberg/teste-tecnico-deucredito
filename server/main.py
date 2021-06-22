from fastapi import FastAPI

# local imports
from server import config


app = FastAPI()


@app.get('/')
async def main():
    """Deployment health check"""
    return {
        'health_check': 'ok',
        'version': config.SERVER_VERSION
    }
