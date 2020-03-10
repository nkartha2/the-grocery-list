# the-grocery-list

#### Run backend
cd app/flask
source bin/activate
FLASK_APP=__init__.py python run.py


### Run frontend
cd app/static
npm start

### Running a migration
FLASK_APP=__init__.py flask db migrate
