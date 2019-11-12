import React from 'react';
import { connect } from 'react-redux';
import { RecipeState } from './store/recipe_types';

function IngredientsToBeAddedList(props: RecipeState): JSX.Element {
  return (
    <div>
      <h3>Recipe Ingredients:</h3>
      {props.ingredients ? props.ingredients[0].ing.name : "None"}
    </div>
  );
}

function mapStateToProps(state: RecipeState): RecipeState {
  return {
    ingredients: state.ingredients
  }
}

export default connect(
  mapStateToProps
)(IngredientsToBeAddedList)
