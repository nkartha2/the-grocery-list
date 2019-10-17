import React, { useState } from 'react';
import axiosClient from "./axiosClient";

function IngredientForm(): JSX.Element {
  async function searchIngredients (ingredName: string) {
    try {
      axiosClient({
        method: "get",
        url: "/api/v1/ingredient",
        params: {
          "ingredient_name": ingredName
        }
      })
    } catch(e) {
        console.error(e);
      }
  }

  async function getUnitofMeasure (uom: string) {
    try {
      axiosClient({
        method: "get",
        url: "/api/v1/uom",
        params: {
          "uom": uom
        }
      })
    } catch(e) {
        console.error(e);
      }
  }

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.value) {
      searchIngredients(e.currentTarget.value)
    }
  }

  const handleUnitofMeasureChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.value) {
      getUnitofMeasure(e.currentTarget.value)
    }
  }

  return (
    <div>
      <h3>Add Ingredient</h3>
      <label>Name</label>
      <input onChange={(e) => handleNameChange(e)} type="text" name="ingredient_name"/>
      <label>Quantity</label>
      <input type="number" name="ingredient_quantity"/>
      <label>Unit of Measure</label>
      <input onChange={(e) => handleUnitofMeasureChange(e)} type="text" name="uom"/>
      <button>Add Ingredient</button>
    </div>
  );
}

export default IngredientForm;
