import React, { useState, useEffect } from 'react';
import axiosClient from "./axiosClient";
import './styles/_recipes.scss';
import { RecipeState } from './store/recipe_types';


function Recipes(): JSX.Element {
  const [recipeResults, setRecipes] = useState([]);
  const [activeRecipe, setActiveRecipe] = useState<null | RecipeState>();

  function showIngredients(recipeId: number) {
    console.log('wip ')
  }

  useEffect(() => {
    try {
      axiosClient({
        method: "get",
        url: "/api/v1/recipes"
      }).then(
        response => {
          if (response.data && response.data.length > 0) {
            setRecipes(response.data)
          }
        }
      )
    } catch(e) {
      console.error(e);
    }
  }, [])

  return (
    <div className="main-section">
      <h2 className="recipe_title">Recipes</h2>
      <ol>
        {recipeResults.map((recipe: {id: number, name: string}, index: number) => {
          return(
            <li key={index}>
              <a
                style={{padding: "10px 0px"}}
                onClick={() => fetchRecipe(recipe.id)}
              >
                {recipe.name}
              </a>
              {activeRecipe && activeRecipe.name}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Recipes;