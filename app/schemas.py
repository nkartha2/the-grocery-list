from app import ma


class IngredientSchema(ma.Schema):
  class Meta:
    fields = ("id", "name", "type")


class IngredientsSchema(ma.Schema):
  class Meta:
    fields = (
      "quantity",
      "ingredient",
      "unit_of_measure",
      "measure_id",
      "recipe_id",
      "ingredient"
    )

  ingredient = ma.Nested(IngredientSchema)


class RecipeSchema(ma.Schema):
  class Meta:
    fields = ("id", "name", "ingredients")

  ingredients = ma.List(ma.Nested(IngredientsSchema))


recipe_schema = RecipeSchema()
ingredient_schema = IngredientSchema()
ingredients_schema = IngredientsSchema()
recipes_schema = RecipeSchema(many=True)
