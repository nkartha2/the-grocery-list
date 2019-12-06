import React from 'react';
import { Ingredient, UOM } from "../store/recipe_types";


function DropDownList(props: {results: any, setItem: Function}): JSX.Element {

  const handleSelect = (e: any): any => {
    const selectedItem = props.results[e.currentTarget.value];
    props.setItem(selectedItem)
  }

  const listItems = props.results.map((result: Ingredient | UOM, index: number) =>
    <li
      value={index}
      key={result.id}
      onClick={(e) => handleSelect(e)}
      style={{listStyleType: "none", border: "1px solid black"}}
    >
      <span style={{padding: "5px"}}>
        {result.name}
      </span>
    </li>
  )

  return (
    <ul
      style={{
        position: 'absolute',
        top: "0px",
        background: "white",
        left: "0px",
        padding: "0px"
      }}
    >
      {listItems}
    </ul>
  );
}

export default DropDownList;