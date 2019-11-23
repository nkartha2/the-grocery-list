from flask import render_template, Blueprint
from flask_cors import CORS

from app import app

CORS(app)

admin_view = Blueprint('admin_view', __name__)

# admin ingredients
@app.route("/admin/ingredients", methods=["GET"])
def admin_ingredients():
  return render_template("ingredient_admin.html")