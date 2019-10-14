import React, { useState } from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/'
})
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
      <input type="url" name="recipe_link"></input>
      <label>Recipe Name</label>
      <input type="text" name="recipe_name" onChange={(e) => handleChange(e)}></input>
      <h3>Added Ingredients:</h3>
      <ul></ul>
      <label>Notes</label>
      <textarea name="notes"></textarea>
      <button onClick={submitRecipe}>Add Recipe</button>
    </div>
  );
}

export default RecipeForm;