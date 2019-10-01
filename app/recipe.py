
# # Importing Flask module and creating web server
# # from Flask module
from flask import Flask
from flask import render_template, request
from app.models import Ingredient, Ingredients, Recipe
from app import app

# the default page
@app.route("/", methods=["GET", "POST"])
# what gets executed when arriving on the main page
def home():
  return render_template("recipe.html")

# python assigns name __main__ to script when executed
# if we import another script, if statement will
# prevent other scripts from running
if __name__ == "__main__":
  app.run(debug=True)
