import React from 'react';
import { connect } from 'react-redux';
// import { AppState } from './index';
import { RecipeState } from './store/recipe_types';

function IngredientsToBeAddedList(props: RecipeState): JSX.Element {
  const items = props.ingredients.map((ingredient, index) => {
    return (
      <li key={index}>{ingredient.quantity} {ingredient.uom.name} {ingredient.ing.name}</li>
    );
  });

  return (
    <div>
      <h3>Recipe Ingredients:</h3>
      <ul>
        {items}
      </ul>
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
