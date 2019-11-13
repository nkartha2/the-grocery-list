import React from 'react';
import { connect } from 'react-redux';
// import { AppState } from './index';
import { RecipeState } from './store/recipe_types';

function IngredientsToBeAddedList(props: RecipeState): JSX.Element {
  return (
    <div>
      <h3>Recipe Ingredients:</h3>
      {props.ingredients && props.ingredients[0] && props.ingredients[0].ing ? props.ingredients[0].ing.name : "None"}
    </div>
  );
}

function mapStateToProps(state: any): RecipeState {
  return {
    ingredients: state.recipe.ingredients
  }
}

export default connect(
  mapStateToProps
)(IngredientsToBeAddedList)
