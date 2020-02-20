from app import ma
from app.models import Ingredient, Ingredients, UnitOfMeasure, Recipe


class IngredientSchema(ma.ModelSchema):
  class Meta:
    model = Ingredient


class UnitofMeasureSchema(ma.ModelSchema):
  class Meta:
    model = UnitOfMeasure


class IngredientsSchema(ma.ModelSchema):
  class Meta:
    model = Ingredients

  unit_measure = ma.Nested(UnitofMeasureSchema)
  ingredient = ma.Nested(IngredientSchema)


class RecipeSchema(ma.ModelSchema):
  class Meta:
    model = Recipe

  ingredients = ma.List(ma.Nested(IngredientsSchema))


unit_of_measure_schema = UnitofMeasureSchema()
recipe_schema = RecipeSchema()
ingredient_schema = IngredientSchema(many=True)
ingredients_schema = IngredientsSchema()
recipes_schema = RecipeSchema(many=True)
