import { ADD_RECIPE_ING, REMOVE_RECIPE_ING, RecipeActionTypes } from './recipe_action_types';
import { AddIngredient } from './recipe_types';

export function addRecipeIng (ingredient: AddIngredient): RecipeActionTypes {
  return {
    type: ADD_RECIPE_ING,
    payload: ingredient
  }
}

export function removeRecipeIng (ingIndex: number): RecipeActionTypes {
  return {
    type: REMOVE_RECIPE_ING,
    payload: ingIndex
  }
}
