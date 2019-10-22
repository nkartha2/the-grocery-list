import { ADD_RECIPE_ING, REMOVE_RECIPE_ING, RecipeActionTypes } from './recipe_action_types';

export function addRecipeIng (ingId: string): RecipeActionTypes {
  return {
    type: ADD_RECIPE_ING,
    id: ingId
  }
}

export function removeRecipeIng (ingId: string): RecipeActionTypes {
  return {
    type: REMOVE_RECIPE_ING,
    id: ingId
  }
}
