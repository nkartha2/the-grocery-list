import React, { useState, useEffect } from 'react';
import axiosClient from "./axiosClient";

const colorPalette = {
  sweetMeatGreen: "#EEFABC",
  appleSauceGreen: "#DDE435",
  coreGreen: "#C2C72D",
  fireOrange: "#FF6F36",
  spottySkinRed: "#F14A2A"
}

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
      <h2 style={{color: colorPalette.coreGreen, fontFamily: 'Montserrat'}}>Recipes</h2>
      {recipeResults.map((recipe: {name: string}, index: number) => {
        return(<p key={index}>{recipe.name}</p>);
      })}
    </div>
  );
}

export default Recipes;