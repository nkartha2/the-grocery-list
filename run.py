from flask import render_template, request, jsonify
from flask_cors import CORS
from app.models import Ingredient, Ingredients, Recipe, UnitOfMeasure
from app import app, db
from app.schemas import ingredients_schema

from app.views.admin_ingredient_views import ingredient_admin_view
from app.views.admin_uom_views import uom_admin_view
from app.views.recipe_views import recipe_view

CORS(app)

app.register_blueprint(ingredient_admin_view)
app.register_blueprint(uom_admin_view)
app.register_blueprint(recipe_view)


# python assigns name __main__ to script when executed
# if we import another script, if statement will
# prevent other scripts from running
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
