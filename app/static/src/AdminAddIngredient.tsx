import React from 'react';
import axiosClient from './axiosClient';

function AdminAddIngredient(): JSX.Element {
  async function addIng(ingName: string, ingType: string) {
    try {
      axiosClient({
        method: "post",
        url: "/api/v1/admin/ingredient",
        params: {
          "ingredient_name": ingName,
          "ingredient_type": ingType
        }
      })
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <div className="form">
      <label>Ingredient Name</label>
      <input id="ingredient-name" type="text" name="ingredient_name" />
      <label>Ingredient Type</label>
      <input id="ingredient-type" type="text" name="ingredient_type" />
      <button
        className="form_button"
        onClick={(e) => console.log(e)}
      >
        Add Ingredient
      </button>
    </div>
  )
}

export default AdminAddIngredient;