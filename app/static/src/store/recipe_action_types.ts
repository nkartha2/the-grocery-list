import { AddIngredient } from './recipe_types';

export const ADD_RECIPE_ING = 'ADD_RECIPE_ING';
export const REMOVE_RECIPE_ING = 'REMOVE_RECIPE_ING';

interface AddRecipeIngAction {
  type: typeof ADD_RECIPE_ING,
  payload: AddIngredient
}

interface RemoveRecipeIngAction {
  type: typeof REMOVE_RECIPE_ING,
  payload: number
}

export type RecipeActionTypes = AddRecipeIngAction | RemoveRecipeIngAction;
