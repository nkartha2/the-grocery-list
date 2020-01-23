from flask import render_template, Blueprint, request, jsonify
from app.models import UnitOfMeasure, Recipe, Ingredient, Ingredients
from app import db
from app.schemas import ingredient_schema, ingredients_schema, recipes_schema, recipe_schema

recipe_view = Blueprint('recipe_view', __name__, url_prefix="/api/v1/")

@recipe_view.route("/ingredient", methods=["GET"])
def get_ingredient():
  ingredient_name = request.args.get("ingredient_name")
  ingredient = Ingredient.query.filter(Ingredient.name.match(ingredient_name)).limit(5)
  ingredients = ingredient.all()
  all_ingredients = ingredients_schema.dump(ingredients)
  return jsonify(all_ingredients)

@recipe_view.route("/uom", methods=["GET"])
def get_uom():
  request_uom = request.args.get("uom")
  uom = UnitOfMeasure.query.filter(UnitOfMeasure.name.match(request_uom)).limit(5)
  uoms = uom.all()
  all_uoms = ingredients_schema.dump(uoms)
  return jsonify(all_uoms)


@recipe_view.route("/recipes", methods=["GET"])
def get_recipes():
  recipes_results = Recipe.query.limit(15).all()
  ingredients = []

  for recipe in recipes_results:
    if(len(recipe.ingredients) > 0):
      for ing in recipe.ingredients:
        
        print(ing.ingredient.name)

        ingredients.append(ingredient_schema.dump(ing.ingredient))

  recipes = recipes_schema.dump(recipes_results)

  return jsonify(recipes_results)


@recipe_view.route("/add/recipe", methods=["POST"])
def add_recipe():
  recipe = Recipe(
    name=request.json['recipe_name'],
    link=request.json['recipe_link']
  )

  db.session.add(recipe)
  db.session.flush()

  for ingredient in request.json['ingredients']:
    ingredient_to_add = Ingredients(
      ingredient_id=ingredient['ing']['id'],
      quantity=ingredient['quantity'],
      recipe_id=recipe.id,
    )
    if ingredient['uom']:
      uom_id = ingredient['uom']['id']
      ingredient_to_add.measure_id = uom_id

    db.session.add(ingredient_to_add)

  db.session.commit()
  return 'to do FIX RECIPE ID'
