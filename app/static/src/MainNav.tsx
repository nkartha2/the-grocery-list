import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';

function MainNav() {
  return (
    <div className="main-nav">
      <h1>Neel's Meals</h1>
      <FontAwesomeIcon icon={faCarrot} />
      <div className="menu">
        <a>Recipes </a>
        <a>Ingredients </a>
        <a>Groceries </a>
      </div>
    </div>
  )
}

export default MainNav;