from app import ma
from app.models import Ingredient, Ingredients, UnitOfMeasure, Recipe


class IngredientSchema(ma.ModelSchema):
  class Meta:
    model = Ingredient


class UnitofMeasureSchema(ma.Schema):
  class Meta:
    fields = (UnitOfMeasure.name, UnitOfMeasure.id)

class IngredientsSchema(ma.ModelSchema):
  class Meta:
    model = Ingredients

  unit_of_measure = ma.Nested(UnitofMeasureSchema)
  ingredient = ma.Nested(IngredientSchema)


class RecipeSchema(ma.ModelSchema):
  class Meta:
    model = Recipe

  ingredients = ma.List(ma.Nested(IngredientsSchema))

unit_of_measure_schema = UnitofMeasureSchema()
recipe_schema = RecipeSchema()
ingredient_schema = IngredientSchema()
ingredients_schema = IngredientsSchema()
recipes_schema = RecipeSchema(many=True)
