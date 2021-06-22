FROM python:3.9

COPY Pipfile .
COPY Pipfile.lock .

RUN pip install --upgrade pip \
    && pip install pipenv fastapi uvicorn \
    && pipenv install --deploy --system

EXPOSE 80

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "127.0.0.1", "--port", "80"]
