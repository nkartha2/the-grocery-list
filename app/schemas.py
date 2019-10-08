from app import ma

class IngredientSchema(ma.Schema):
  class Meta:
    fields = ("name", "type")

ingredient_schema = IngredientSchema()
ingredients_schema = IngredientSchema(many=True)
