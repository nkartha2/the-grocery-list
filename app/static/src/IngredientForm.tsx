import React, { useState } from 'react';
import axiosClient from "./axiosClient";
import { Ingredient, UOM } from "./store/recipe_types"

function IngredientForm(): JSX.Element {
  const [ingredientResults, setIngResults] = useState<Ingredient[] | []>([]);
  const [ing, setIng] = useState<Ingredient| null>(null);
  const [ingName, setIngName] = useState<string>("");
  const [uomResults, setUOMResults] = useState<UOM[] | []>([]);
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
    const handleSelectChange = (e: any): any => {
      if (e && e.currentTarget && e.currentTarget.value) {
        const selectedIng = ingredientResults[e.currentTarget.value];
        setIng(selectedIng);
        setIngName(selectedIng.name)
      }
    }

    const listItems = results.results.map((ing: Ingredient, index: number) =>
      <option
        value={index}
        key={ing.id}
      >
          {ing.name}
      </option>
    )
    return (
      <select
        onChange={
          (data) => handleSelectChange(data)
        }>
          {listItems}
        </select>
      );
  }

  async function getUnitofMeasure (uom: string) {
    try {
      axiosClient({
        method: "get",
        url: "/api/v1/uom",
        params: {
          "uom": uom
        }
      }).then(
        response => {
          if (response.data && response.data.length > 0) {
            setUOMResults(response.data)
          }
        }
      )
    } catch(e) {
      console.error(e);
    }
  }

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.value) {
      searchIngredients(e.currentTarget.value)
      setIngName(e.currentTarget.value)
      setIng(null)
    } else {
      setIngResults([])
      setIng(null)
      setIngName("")
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
      <input
        value={ingName ? ingName : ""}
        onChange={(e) => handleNameChange(e)}
        type="text"
        name="ingredient_name"
      />
      {!ing && ingredientResults && ingredientResults.length > 0 &&
        <ResultsList results={ingredientResults}/>
      }
      <label>Quantity</label>
      <input type="number" name="ingredient_quantity"/>
      <label>Unit of Measure</label>
      <input onChange={(e) => handleUnitofMeasureChange(e)} type="text" name="uom"/>
      {uomResults && uomResults.length > 0 &&
        <ResultsList results={uomResults}/>
      }
      <button onClick={() => console.log('hi for now')}>Add Ingredient</button>
    </div>
  );
}

export default IngredientForm;
