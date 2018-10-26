from flask import Flask, render_template
from app.module_one.controllers import module_one

# creating an instance of Flask class
# name special variable that receives string "main" when executed
app = Flask(__name__)
app.config.from_object("config")

app.register_blueprint(module_one)