# Importing Flask module and creating web server
# from Flask module
from flask import Flask
from config import DATABASE_URI
from flask_sqlalchemy import SQLAlchemy
from flask import render_template, request
from flask_migrate import Migrate
from sqlalchemy import create_engine
engine = create_engine(DATABASE_URI)

# __name__ means this current file
# creating instance of Flask class and calling it app
# creating new web application
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = DATABASE_URI
# initialize connection to db and keep in db variable
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# db.create_all(engine)


# # the default page
# @app.route("/", methods=["GET", "POST"])
# # what gets executed when arriving on the main page
# def home():
#   return render_template("recipe.html")

# # python assigns name __main__ to script when executed
# # if we import another script, if statement will
# # prevent other scripts from running
# if __name__ == "__main__":
#   app.run(debug=True)

