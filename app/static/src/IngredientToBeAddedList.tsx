import React from 'react';
import { connect } from 'react-redux';
// import { AppState } from './index';
import { removeRecipeIng } from './store/actions';
import { RecipeState, AddIngredient } from './store/recipe_types';
import RemoveButton from './ui_components/RemoveButton';

function IngredientsToBeAddedList(props: any): JSX.Element {
  const style= {
    display: "inline-block",
    padding: "5px"
  };

  const items = props.ingredients.map((ingredient: AddIngredient, index: number) => {
    return (
      <li key={index}>
        <RemoveButton
          onClick={props.onRemoveClick}
          removalIndex={index}
        />
        <div style={{ display: "inline-block", marginLeft: "5px"}}>
          <p style={style}>{ingredient.quantity}</p>
          {ingredient.unit_measure.name && <p style={style}>{ingredient.unit_measure.name}</p>}
          <p style={style}>{ingredient.ingredient.name}</p>
        </div>
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
