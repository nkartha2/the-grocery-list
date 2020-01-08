import React, { useState } from 'react';
import axiosClient from './axiosClient';

import "./styles/_forms.scss";

function AdminAddIngredient(): JSX.Element {
  const [ingName, setIngName] = useState<string>('');
  const [ingType, setIngType] = useState<string>('');

  async function addIng() {
    try {
      axiosClient({
        method: "post",
        url: "/api/v1/admin/add_ingredient",
        data: {
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
      <div className="admin_form">
        <label>Ingredient Name</label>
        <input
          className="form_input"
          id="ingredient-name"
          type="text"
          name="ingredient_name"
          onChange={(e) => setIngName(e.currentTarget.value)}
        />
        <label>Ingredient Type</label>
        <input
          className="form_input"
          id="ingredient-type"
          type="text"
          name="ingredient_type"
          onChange={(e) => setIngType(e.currentTarget.value)}
        />
        <button
          className="form_button"
          onClick={(e) => addIng()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  )
}

export default AdminAddIngredient;