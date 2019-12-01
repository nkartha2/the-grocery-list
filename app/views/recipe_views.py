from flask import render_template, request, jsonify
from app.models import Recipe, Ingredient, Ingredients
from app import app, db

@app.route("/api/v1/ingredient", methods=["GET"])
def get_ingredient():
  ingredient_name = request.args.get("ingredient_name")
  ingredient = Ingredient.query.filter(Ingredient.name.match(ingredient_name)).limit(5)
  ingredients = ingredient.all()
  all_ingredients = ingredients_schema.dump(ingredients)
  return jsonify(all_ingredients)

@app.route("/api/v1/uom", methods=["GET"])
def get_uom():
  request_uom = request.args.get("uom")
  uom = UnitOfMeasure.query.filter(UnitOfMeasure.name.match(request_uom)).limit(5)
  uoms = uom.all()
  all_uoms = ingredients_schema.dump(uoms)
  return jsonify(all_uoms)


# the default page
@app.route("/", methods=["GET", "POST"])
# what gets executed when arriving on the main page
def recipe():
  return render_template("recipe.html")


@app.route("/api/v1/add/recipe", methods=["POST"])
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
