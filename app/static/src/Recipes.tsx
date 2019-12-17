import React, { useState, useEffect } from 'react';
import axiosClient from "./axiosClient";
import './styles/_recipes.scss';


function Recipes(): JSX.Element {
  const [recipeResults, setRecipes] = useState([]);

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
    <div>
      <h2 className="recipe_title">Recipes</h2>
      <ol>
        {recipeResults.map((recipe: {name: string}, index: number) => {
          return(<li key={index}>{recipe.name}</li>);
        })}
      </ol>
    </div>
  );
}

export default Recipes;