from flask import Blueprint, request, render_template

module_one = Blueprint("simple_page", __name__)

@module_one.route("/")
def index():
    return render_template("index.html")