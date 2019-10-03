from flask import render_template, request
from app.models import Ingredient, Ingredients, Recipe, UnitOfMeasure
from app import app, db

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

@app.route("/api/ingredient", methods=["GET"])
def get_ingredients():
  ingredients = db.session.query(Ingredient).limit(5).all
  return ingredients


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
