import React from 'react';
import { connect } from 'react-redux';
// import { AppState } from './index';
import { removeRecipeIng } from './store/actions';
import { RecipeState, Ingredient, AddIngredient } from './store/recipe_types';
import RemoveButton from './ui_components/RemoveButton';

function IngredientsToBeAddedList(props: any): JSX.Element {
  const items = props.ingredients.map((ingredient: AddIngredient, index: number) => {
    return (
      <li key={index}>
        <RemoveButton
          onClick={props.onRemoveClick}
          removalIndex={index}
        />
        {ingredient.quantity}
        {ingredient.uom.name}
        {ingredient.ing.name}
      </li>
    );
  });

  return (
    <div>
      <h4>Recipe Ingredients:</h4>
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
    onRemoveClick: (ingIndex: number) => dispatch(removeRecipeIng(ingIndex))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsToBeAddedList)
