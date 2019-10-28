import React from 'react';
import { combineReducers } from 'react-redux';

import { recipeReducer } from './reducers';

const rootReducer = combineReducers({
  recipe: recipeReducer
})

export type AppState = ReturnType<typeof rootReducer>