from flask import render_template, request
from app.models import Ingredient, Ingredients, Recipe
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

@app.route("/admin/ingredients", methods=["POST"])
def admin_add_ingredient():
    ingredient = Ingredient(
      name=request.form['ingredient_name'],
      ingredient_type=request.form['ingredient_type']
    )
    db.session.add(ingredient)
    db.session.commit()
    return render_template("ingredient_admin.html")


# python assigns name __main__ to script when executed
# if we import another script, if statement will
# prevent other scripts from running
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
