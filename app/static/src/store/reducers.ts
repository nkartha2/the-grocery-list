import { ADD_RECIPE_ING, REMOVE_RECIPE_ING, RecipeActionTypes } from './recipe_action_types';
import { RecipeState } from './recipe_types';

const initialState: RecipeState = {
  ingredients: []
}

export function recipeReducer(
  state = initialState,
  action: RecipeActionTypes
): RecipeState {
  switch (action.type) {
    case ADD_RECIPE_ING: {
      return {
        ingredients: [...state.ingredients, action.payload]
      }
    }
    case REMOVE_RECIPE_ING: {
      console.log(action.payload)
      return {
        ingredients: [...state.ingredients.slice(0, action.payload), ...state.ingredients.slice(action.payload + 1)]
      }
    }
    default:
      return state
  }
}