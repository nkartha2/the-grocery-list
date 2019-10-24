import React, { useState } from 'react';
import IngredientForm from "./IngredientForm";
import axiosClient from "./axiosClient";
import { RecipeState} from "./store/recipe_types";

// {
  // recipe_name: "tomato soup",
  // recipe_link: "https://minimalistbaker.com/creamy-roasted-red-pepper-tomato-soup/",
  // recipe_notes: "",
  // ingredients: [
    // {ingredient_id, quantity, uom_id}, ingredient_id
// }

function RecipeForm(recipe: RecipeState): JSX.Element {
  const [recipeName, setRecipeName] = useState("");
  const [ingredientList, setIngredientList] = useState([]);

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
      <IngredientForm makeList={setIngredientList}/>
      <label>Notes</label>
      <textarea name="notes" />
      <button onClick={submitRecipe}>Add Recipe</button>
    </div>
  );
}

export default RecipeForm;
