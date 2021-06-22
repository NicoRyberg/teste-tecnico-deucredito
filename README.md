# PBA-financial-management-dashboard


## Setting up your development environment

### Installing the libraries
Run the following commands:
  - `pip install pipenv`
  - `pipenv install`

### Running the API for development
Initialize your app in an VM using the Pipenv:

- `pipenv shell`

Then run the following commands:

- `uvicorn app.main:app --reload`

And your app will be running on http://localhost:8000/

### Run all tests
- python -m unittest discover -p 'test*.py'


## CD

https://cloud.google.com/run/docs/continuous-deployment-with-cloud-build