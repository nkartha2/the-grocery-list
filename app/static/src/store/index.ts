import { combineReducers } from 'redux';

import { recipeReducer } from './reducers';

const rootReducer = combineReducers({
  recipe: recipeReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;