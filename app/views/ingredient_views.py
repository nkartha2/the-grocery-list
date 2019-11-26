from flask import render_template, Blueprint, request
from flask_cors import CORS
from app.models import Ingredient

from app import app, db

admin_view = Blueprint('admin_view', __name__, url_prefix="/admin")

# admin ingredients
@admin_view.route("/ingredients/", methods=["GET"])
def admin_ingredients():
  return render_template("ingredient_admin.html")

@admin_view.route("/ingredients/", methods=["POST"])
def admin_add_ingredient():
    ingredient = Ingredient(
      name=request.form['ingredient_name'],
      ingredient_type=request.form['ingredient_type']
    )

    db.session.add(ingredient)
    db.session.commit()
    return render_template("ingredient_admin.html")
