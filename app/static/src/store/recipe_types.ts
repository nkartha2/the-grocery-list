export interface RecipeState {
  name?: string,
  link?: string,
  state?: string,
  ingredients: AddIngredient[]
}

export interface Ingredient {
  id: string,
  name: string
}

export interface UOM {
  id: string,
  name: string
}

export interface AddIngredient {
  ingredient: Ingredient,
  quantity: string,
  uom: UOM
}