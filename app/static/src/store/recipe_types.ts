export interface RecipeState {
  name?: string,
  link?: string,
  state?: string,
  ingredients: AddIngredient[]
}

export interface RecipeResponse {
  id: string,
  name: string,
  link?: string,
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
  unit_measure: UOM
}