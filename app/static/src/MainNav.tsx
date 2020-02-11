import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

function MainNav() {
  return (
    <div className="main-nav">
      <h1>Neel's Meals</h1>
      <FontAwesomeIcon style={{width: "100%", margin: "5px auto"}} icon={faCarrot} />
      <div className="menu">
        <a href="/recipes">Recipes</a>
        <h4>Admin</h4>
        <a href="/admin/ingredient">Add Ingredient</a>
        <a href="/admin/uom">Add Unit of Measure</a>
        <a href="/admin/recipe">Add Recipe</a>
        {/* <a href="">Groceries </a> */}
      </div>
    </div>
  )
}

export default MainNav;