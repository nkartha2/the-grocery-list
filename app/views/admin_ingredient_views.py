from flask import render_template, Blueprint, request, jsonify
from app.models import Ingredient
from app.schemas import ingredient_schema
from app import app, db

ingredient_admin_view = Blueprint('ingredient_admin_view', __name__, url_prefix="/api/v1/admin")

# admin ingredients
@ingredient_admin_view.route("/add_ingredient", methods=["POST"])
def admin_add_ingredient():
  ingredient = Ingredient(
    name=request.json['ingredient_name'],
    ingredient_type=request.json['ingredient_type']
  )

  db.session.add(ingredient)
  db.session.commit()
  return ingredient_schema.dump(ingredient)
