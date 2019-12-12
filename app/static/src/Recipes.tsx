import React, { useState, useEffect } from 'react';
import axiosClient from "./axiosClient";
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
      <h2>Recipes</h2>
    </div>
  );
}

export default Recipes;