from fastapi import FastAPI

app = FastAPI()


@app.route('/')
async def index():
    return 'index'


@app.get('/')
async def main():
    return 'ok'
