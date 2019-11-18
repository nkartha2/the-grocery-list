from app import ma

class IngredientSchema(ma.Schema):
  class Meta:
    fields = ("id", "name", "type")

class RecipeSchema(ma.Schema):
  id = ma.Int()
  ingredients = ma.Nested(IngredientSchema)
  recipe_name = ma.Str()
  recipe_link = ma.Str()

ingredient_schema = IngredientSchema()
ingredients_schema = IngredientSchema(many=True)
