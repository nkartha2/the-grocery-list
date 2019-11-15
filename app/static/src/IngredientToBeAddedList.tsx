import React from 'react';
import { connect } from 'react-redux';
// import { AppState } from './index';
import { removeRecipeIng } from './store/actions';
import { RecipeState, Ingredient, AddIngredient } from './store/recipe_types';

function IngredientsToBeAddedList(props: any): JSX.Element {
  const items = props.ingredients.map((ingredient: AddIngredient, index: number) => {
    return (
      <li key={index}>
        <span
          style={{margin: "5px"}}
          onClick={(e) => props.onRemoveClick(ingredient)}
        >
          x
        </span>
        {ingredient.quantity}
        {ingredient.uom.name}
        {ingredient.ing.name}
      </li>
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


function mapDispatchToProps(dispatch: any) {
  return {
    onRemoveClick: (ingredient: AddIngredient) => dispatch(removeRecipeIng(ingredient))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsToBeAddedList)
