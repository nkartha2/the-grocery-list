import React, { useState } from 'react';
import IngredientForm from "./IngredientForm";
import axiosClient from "./axiosClient";
import { RecipeState} from "./store/recipe_types";

// {
  // recipe_name: "tomato soup",
  // recipe_link: "https://minimalistbaker.com/creamy-roasted-red-pepper-tomato-soup/",
  // recipe_notes: "",
  // ingredients: [
    // {ingredient_id: 2, quantity: 1, uom_id: 4},
// }

function RecipeForm(recipe: RecipeState): JSX.Element {
  const [recipeName, setRecipeName] = useState("");

  async function submitRecipe () {
    try {
      axiosClient({
        method: "post",
        url: '/api/v1/add/recipe',
        data: {
          "recipe_name": recipeName
        }
      })
    } catch(e) {
      console.error(e)
    }
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setRecipeName(e && e.currentTarget && e.currentTarget.value ? e.currentTarget.value : "");
  }

  return (
    <div style={{width: "500px", margin: "30px auto"}}>
      <div style={{display: "block", margin: "10px 0px"}}>
        <label>Recipe Link </label>
        <input type="url" name="recipe_link"/>
      </div>
      <div style={{display: "block", margin: "10px 0px"}}>
        <label>Recipe Name </label>
        <input type="text" name="recipe_name" onChange={(e) => handleChange(e)} />
      </div>
      <h3>Added Ingredients:</h3>
      <IngredientForm />
      <label>Notes</label>
      <textarea name="notes" />
      <button onClick={submitRecipe}>Add Recipe</button>
    </div>
  );
}

export default RecipeForm;
