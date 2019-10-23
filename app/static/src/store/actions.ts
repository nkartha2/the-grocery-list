import { ADD_RECIPE_ING, REMOVE_RECIPE_ING, RecipeActionTypes } from './recipe_action_types';
import { Ingredient } from './recipe_types';

export function addRecipeIng (ingredient: Ingredient): RecipeActionTypes {
  return {
    type: ADD_RECIPE_ING,
    payload: ingredient
  }
}

export function removeRecipeIng (ingredient: Ingredient): RecipeActionTypes {
  return {
    type: REMOVE_RECIPE_ING,
    payload: ingredient
  }
}
