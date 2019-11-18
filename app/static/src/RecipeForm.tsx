import React, { useState } from 'react';
import IngredientForm from "./IngredientForm";
import IngredientToBeAddedList from "./IngredientToBeAddedList";
import axiosClient from "./axiosClient";
import { RecipeState} from "./store/recipe_types";
import { connect } from 'react-redux';


// {
  // recipe_name: "tomato soup",
  // recipe_link: "https://minimalistbaker.com/creamy-roasted-red-pepper-tomato-soup/",
  // recipe_notes: "",
  // ingredients: [
    // {ingredient_id: 2, quantity: 1, uom_id: 4},
// }

function RecipeForm(props: any): JSX.Element {
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
    <div style={{width: "500px", margin: "30px auto"}}>
      <div style={{display: "block", margin: "10px 0px"}}>
        <label>Recipe Link </label>
        <input
          type="url"
          name="recipe_link"
          onChange={(e) => handleLinkChange(e)}
        />
      </div>
      <div style={{display: "block", margin: "10px 0px"}}>
        <label>Recipe Name </label>
        <input
          type="text"
          name="recipe_name"
          onChange={(e) => handleNameChange(e)}
        />
      </div>
      <IngredientToBeAddedList/>
      <IngredientForm />
      <label>Notes</label>
      <textarea name="notes" />
      <button onClick={() => submitRecipe()}>Add Recipe</button>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    ingredients: state.recipe.ingredients
  }
}


export default connect(
  mapStateToProps
)(
  RecipeForm
);
