import React, { useState } from 'react';
import axiosClient from "./axiosClient";

type IngredientResult = {name: string, id: string};

function IngredientForm(makeList: any): JSX.Element {
  const [ingredientResults, setIngResults] = useState<IngredientResult[] | []>([]);
  const [ingID, setIngID] = useState("");
  const [uom, setUOM] = useState("");
  const [quantity, setQuantity] = useState("");

  async function searchIngredients (ingredName: string) {
    try {
      axiosClient({
        method: "get",
        url: "/api/v1/ingredient",
        params: {
          "ingredient_name": ingredName
        }
      }).then(
          response => {
            if (response.data && response.data.length > 0) {
              setIngResults(response.data)
            }
          }
        )
    } catch(e) {
      console.error(e);
    }
  }

  function ResultsList(results: any) {
    const handleSelectChange = (value: any): any => {
      setIngID(value);
      console.log(ingID)
    }

    const listItems = results.results.map((ing: IngredientResult) =>
      <option value={ing.id} key={ing.id}>{ing.name}</option>
    )

    return (<select onChange={(value) => handleSelectChange(value)}>{listItems}</select>);
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
    } else {
      setIngResults([])
    }
  }

  const handleUnitofMeasureChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.value) {
      getUnitofMeasure(e.currentTarget.value)
    }
  }

  const handleAddIngredient = () => {
    makeList();
  }

  return (
    <div>
      <h3>Add Ingredient</h3>
      <label>Name</label>
      <input onChange={(e) => handleNameChange(e)} type="text" name="ingredient_name"/>
      {ingredientResults && ingredientResults.length > 0 &&
        <ResultsList results={ingredientResults}/>
      }
      <label>Quantity</label>
      <input type="number" name="ingredient_quantity"/>
      <label>Unit of Measure</label>
      <input onChange={(e) => handleUnitofMeasureChange(e)} type="text" name="uom"/>
      <button onClick={handleAddIngredient}>Add Ingredient</button>
    </div>
  );
}

export default IngredientForm;
