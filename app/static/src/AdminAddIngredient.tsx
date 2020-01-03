import React from 'react';

function AdminAddIngredient(): JSX.Element {
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