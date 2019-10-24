export interface RecipeState {
  ingredients: Ingredient[]
}

export interface Ingredient {
  id: string,
  quantity: number,
  uom: string
}