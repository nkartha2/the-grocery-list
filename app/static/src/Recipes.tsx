import React, { useState, useEffect } from 'react';
import axiosClient from "./axiosClient";
import './styles/_recipes.scss';
import { AddIngredient } from './store/recipe_types';


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
      <ol>
        {recipeResults.map((recipe: {id: number, name: string, ingredients: AddIngredient[]}, index: number) => {
          return(
            <li key={index}>
              <a
                style={{padding: "10px 0px"}}
                onClick={() =>
                  setActiveRecipe(index)
                }
              >
                {recipe.name}
              </a>
              {activeRecipe && activeRecipe === index &&
                <ul>
                  {recipe.ingredients.map((ingredient: AddIngredient) =>
                    <li>{ingredient.ingredient.name}, {ingredient.quantity}, {ingredient.unit_measure ? ingredient.unit_measure.name : ''}</li>
                  )}
                </ul>
              }
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Recipes;