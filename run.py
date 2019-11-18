from flask import render_template, request, jsonify
from flask_cors import CORS
from app.models import Ingredient, Ingredients, Recipe, UnitOfMeasure
from app import app, db
from app.schemas import ingredients_schema

CORS(app)

# the default page
@app.route("/", methods=["GET", "POST"])
# what gets executed when arriving on the main page
def recipe():
  return render_template("recipe.html")

# admin ingredients
@app.route("/admin/ingredients", methods=["GET"])
# what gets executed when arriving on the main page
def admin_ingredients():
  return render_template("ingredient_admin.html")

@app.route("/api/v1/add/ingredient", methods=["POST"])
def add_ingredient():
  ingredient = db.session.query(Ingredient).limit(5)
  ingredients = ingredient.all()
  all_ingredients = ingredients_schema.dump(ingredients)
  return jsonify(all_ingredients)

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

@app.route("/api/v1/add/recipe", methods=["POST"])
def add_recipe():
  recipe_name = request.form.get("recipe_name")
  print(recipe_name)
  return jsonify(recipe_name)

@app.route("/admin/ingredients", methods=["POST"])
def admin_add_ingredient():
    ingredient = Ingredient(
      name=request.form['ingredient_name'],
      ingredient_type=request.form['ingredient_type']
    )
    db.session.add(ingredient)
    db.session.commit()
    return render_template("ingredient_admin.html")

@app.route("/admin/uom", methods=["GET"])
def admin_uom():
  return render_template("uom.html")


@app.route("/admin/uom", methods=["POST"])
def admin_add_uom():
    uom = UnitOfMeasure(
      name=request.form['uom_name'],
    )
    db.session.add(uom)
    db.session.commit()
    return render_template("uom.html")

# python assigns name __main__ to script when executed
# if we import another script, if statement will
# prevent other scripts from running
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
