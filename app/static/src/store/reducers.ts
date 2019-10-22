import { ADD_RECIPE_ING, REMOVE_RECIPE_ING, RecipeActionTypes } from './recipe_action_types';

interface Ingredient {
  id: string,
  quantity: number,
  uom: string
}

interface Recipe {
  ingredients: Ingredient[]
}

const initialState: Recipe = {
  ingredients: []
}

