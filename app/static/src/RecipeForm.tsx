import React from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080'
})
function RecipeForm(): JSX.Element {
  async function submitRecipe () {
    try {
      axiosClient.post('/api/v1/add/ingredient')
    } catch(e) {
      console.error(e)
    }
  }

  return (
    <div>
      <label>Recipe Link</label>
      <input type="url" name="recipe-link"></input>
      <label>Recipe Name</label>
      <input type="text" name="recipe-name"></input>
      <label>Add Ingredient</label>
      <input type="text" name="add-ingredient"></input>
      <h3>Added Ingredients:</h3>
      <ul></ul>
      <textarea name="notes"></textarea>
      <button onClick={submitRecipe}>Add Recipe</button>
    </div>
  );
}

export default RecipeForm;