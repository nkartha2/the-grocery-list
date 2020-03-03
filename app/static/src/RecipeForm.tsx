import React, { useState } from 'react';
import IngredientForm from "./IngredientForm";
import IngredientToBeAddedList from "./IngredientToBeAddedList";
import axiosClient from "./axiosClient";
import { RecipeState } from "./store/recipe_types";
import { AppState } from './store/index';
import { connect } from 'react-redux';

import FormButton from './ui_components/FormButton';
import FormWrapper from './ui_components/FormWrapper';
import debounce from './debounce';

import "./styles/_recipe_form.scss";


function RecipeForm(props: RecipeState): JSX.Element {
  const [recipeName, setRecipeName] = useState("");
  const [recipeLink, setRecipeLink] = useState("");
  const [formError, setFormError] = useState("");

  const resetFields = () => {
    setRecipeName("");
    setRecipeLink("");
    setFormError("");
  }

  const debouncedSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    debounce(submitRecipe, 500);
  }

  async function submitRecipe (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await axiosClient({
        method: "post",
        url: '/api/v1/add/recipe',
        data: {
          "recipe_name": recipeName,
          "recipe_link": recipeLink,
          "ingredients": props.ingredients
        }
      }).then(response => {
        resetFields();
      })
    } catch(e) {
      setFormError(e.message)
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
    <FormWrapper>
        <div>
          <form onSubmit={(e) => debouncedSubmit(e)}>
            <h3>Add Recipe</h3>
            <div>
              <label>Recipe Link </label>
              <input
                value={recipeLink}
                className="form_input"
                type="url"
                name="recipe_link"
                onChange={(e) => handleLinkChange(e)}
              />
            </div>
            <div>
              <label>Recipe Name </label>
              <input
                value={recipeName}
                type="text"
                name="recipe_name"
                className="form_input"
                onChange={(e) => handleNameChange(e)}
              />
            </div>
            <div className="form-input">
              <label>Notes: </label>
              <textarea name="notes" />
            </div>
            {props.ingredients.length > 0 && <IngredientToBeAddedList/>}
            <IngredientForm />
            <FormButton
              ctaString={'Add Recipe'}
            />
          </form>
          {formError && <p>{formError}</p>}
        </div>
      </FormWrapper>
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
