import React, { useState, useEffect } from 'react';
import axiosClient from "./axiosClient";
import './styles/_recipes.scss';
import { AddIngredient, RecipeResponse } from './store/recipe_types';


function Recipes(): JSX.Element {
  const [recipeResults, setRecipes] = useState([]);
  const [activeRecipe, setActiveRecipe] = useState<null | string>();

  const onClickActiveRecipe = (recipeId: string) => {
    if (recipeId === activeRecipe) {
      setActiveRecipe(null)
    } else {
      setActiveRecipe(recipeId);
    }
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
      <ul>
        {recipeResults.map((recipe: RecipeResponse, index: number) => {
          return(
            <li
              key={index}
              style={{padding: "10px"}}
              onClick={() =>
                onClickActiveRecipe(recipe.id)
              }
            >
              {recipe.name}
              {activeRecipe && activeRecipe === recipe.id &&
                <div style={{backgroundColor: "#fff", padding: "15px", color: "#000"}}>
                  <p>Link:
                    <a
                      target="_blank"
                      href={recipe.link}
                    >
                      {recipe.link}
                    </a>
                  </p>
                  <p>Ingredient List:</p>
                  <ul>
                    {recipe.ingredients.map((ingredient: AddIngredient) =>
                      <li key={ingredient.ingredient.id}>{ingredient.ingredient.name}, {ingredient.quantity}, {ingredient.unit_measure ? ingredient.unit_measure.name : ''}</li>
                    )}
                  </ul>
                </div>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipes;