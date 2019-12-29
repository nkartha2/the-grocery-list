import React, { useState } from 'react';
import IngredientForm from "./IngredientForm";
import IngredientToBeAddedList from "./IngredientToBeAddedList";
import axiosClient from "./axiosClient";
import { RecipeState } from "./store/recipe_types";
import { AppState } from './store/index';
import { connect } from 'react-redux';
import Button from './ui_components/Button';

import "./styles/_recipe_form.scss";
import "./styles/_forms.scss";


function RecipeForm(props: RecipeState): JSX.Element {
  const [recipeName, setRecipeName] = useState("");
  const [recipeLink, setRecipeLink] = useState("");

  async function submitRecipe () {
    try {
      axiosClient({
        method: "post",
        url: '/api/v1/add/recipe',
        data: {
          "recipe_name": recipeName,
          "recipe_link": recipeLink,
          "ingredients": props.ingredients
        }
      })
    } catch(e) {
      console.error(e)
    }
  }


  const handleLinkChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRecipeLink(e && e.currentTarget && e.currentTarget.value ? e.currentTarget.value : "");
  }

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRecipeName(e && e.currentTarget && e.currentTarget.value ? e.currentTarget.value : "");
  }

  return (
    <div className="form">
      <div className="admin_form">
        <h3>Add Recipe</h3>
        <div>
          <label>Recipe Link </label>
          <input
            className="form_input"
            type="url"
            name="recipe_link"
            onChange={(e) => handleLinkChange(e)}
          />
        </div>
        <div>
          <label>Recipe Name </label>
          <input
            type="text"
            name="recipe_name"
            className="form_input"
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        {props.ingredients.length > 0 && <IngredientToBeAddedList/>}
        <IngredientForm />
        <label>Notes</label>
        <textarea name="notes" />
        <Button
          onClick={submitRecipe}
          ctaString={'Add Recipe'}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state: AppState) {
  return {
    ingredients: state.recipe.ingredients
  }
}


export default connect(
  mapStateToProps
)(
  RecipeForm
);
