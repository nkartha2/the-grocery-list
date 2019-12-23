import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

function MainNav() {
  return (
    <div className="main-nav">
      <h1>Neel's Meals</h1>
      <FontAwesomeIcon style={{width: "100%", margin: "5px auto"}} icon={faCarrot} />
      <div className="menu">
        <a>Recipes </a>
        <a>Ingredients </a>
        <a>Groceries </a>
      </div>
    </div>
  )
}

export default MainNav;