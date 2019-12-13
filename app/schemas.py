from app import ma

class IngredientSchema(ma.Schema):
  class Meta:
    fields = ("id", "name", "type")


class RecipeSchema(ma.Schema):
  class Meta:
    fields = ("id", "name")


ingredient_schema = IngredientSchema()
ingredients_schema = IngredientSchema(many=True)
recipes_schema = RecipeSchema(many=True)
