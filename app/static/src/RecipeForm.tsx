import React, { useState } from 'react';
import IngredientForm from "./IngredientForm";
import axiosClient from "./axiosClient";


function RecipeForm(): JSX.Element {
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
    <div>
      <label>Recipe Link</label>
      <input type="url" name="recipe_link"/>
      <label>Recipe Name</label>
      <input type="text" name="recipe_name" onChange={(e) => handleChange(e)} />
      <h3>Added Ingredients:</h3>
      <label>Notes</label>
      <IngredientForm />
      <textarea name="notes" />
      <button onClick={submitRecipe}>Add Recipe</button>
    </div>
  );
}

export default RecipeForm;
