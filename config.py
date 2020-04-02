# access file systems relative to project directory
import os
BASE_DIR = os.path.abspath(os.path.dirname("the_grocery_list"))

DEBUG = True
DATABASE_URI = 'postgres+psycopg2://postgres:@127.0.0.1:5342/groceries'
CSRF_ENABLED = True
