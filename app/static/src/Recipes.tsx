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
      <h2 className="recipe_header">Recipes</h2>
      <ol>
        {recipeResults.map((recipe: RecipeResponse, index: number) => {
          return(
            <li
              key={index}
              onClick={() =>
                onClickActiveRecipe(recipe.id)
              }
            >
              <div className="recipe_item">
                {recipe.name}
              </div>
              <div className={activeRecipe && activeRecipe === recipe.id ? "show" : "hide"}>
                {activeRecipe && activeRecipe === recipe.id &&
                  <div className={"panel"}>
                    <h4 className="recipe_name">{recipe.name}</h4>
                    <h5>Link:</h5>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={recipe.link}
                    >
                      {recipe.link}
                    </a>
                    {recipe.ingredients.length > 0 &&
                      <div>
                        <h5>Ingredient List:</h5>
                        <ul>
                          {recipe.ingredients.map((ingredient: AddIngredient) =>
                            <li key={ingredient.ingredient.id}>{ingredient.ingredient.name}, {ingredient.quantity}, {ingredient.unit_measure ? ingredient.unit_measure.name : ''}</li>
                          )}
                        </ul>
                      </div>
                    }
                  </div>
                }
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Recipes;