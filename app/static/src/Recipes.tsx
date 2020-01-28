import React, { useState, useEffect } from 'react';
import axiosClient from "./axiosClient";
import './styles/_recipes.scss';
import { AddIngredient, RecipeState } from './store/recipe_types';


function Recipes(): JSX.Element {
  const [recipeResults, setRecipes] = useState([]);
  const [activeRecipe, setActiveRecipe] = useState<null | number>();

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
        {recipeResults.map((recipe: RecipeState, index: number) => {
          return(
            <li
              key={index}
              style={{padding: "10px"}}
              onClick={() =>
                setActiveRecipe(index)
              }
            >
              {recipe.name}
              {activeRecipe && activeRecipe === index &&
                <div style={{backgroundColor: "#fff", padding: "15px", color: "#000"}}>
                  <p>Link: {recipe.link}</p>
                  <p>Ingredient List:</p>
                  <ul>
                    {recipe.ingredients.map((ingredient: AddIngredient) =>
                      <li>{ingredient.ingredient.name}, {ingredient.quantity}, {ingredient.unit_measure ? ingredient.unit_measure.name : ''}</li>
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