import React, { useState } from 'react';
import axiosClient from "./axiosClient";
import { Ingredient, UOM } from "./store/recipe_types"

function IngredientForm(): JSX.Element {
  const [ingredientResults, setIngResults] = useState<Ingredient[] | []>([]);
  const [ing, setIng] = useState<Ingredient| null>(null);
  const [ingName, setIngName] = useState<string>("");
  const [uomResults, setUOMResults] = useState<UOM[] | []>([]);
  const [uom, setUOM] = useState<UOM| null>(null);
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

  function ResultsList(results: any, setItem: Function) {
    const handleSelect = (e: any): any => {
      const selectedItem = results.results[e.currentTarget.value];
      console.log(setItem)
    }

    const listItems = results.results.map((result: Ingredient | UOM, index: number) =>
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
          position: "absolute",
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
    } else {
      setUOM(null);
      setUOMResults([]);
    }
  }

  const addIngredient = () => {
    console.log(quantity)
    console.log(ing)
  }

  return (
    <div>
      <h3>Add Ingredient</h3>
      <form
        autoComplete="off"
      >
        <div
          style={{display: "block", margin: "10px 0px"}}
        >
          <label>Quantity</label>
          <input onChange={(e) => setQuantity(e.currentTarget.value)} type="number" name="ingredient_quantity"/>
        </div>
        <div
          style={{display: "block", margin: "10px 0px"}}
        >
          <label>Unit of Measure</label>
          <div
            className="items-list"
            style={{
              position: "relative"
            }}
          >
            <input onChange={(e) => handleUnitofMeasureChange(e)} type="text" name="uom"/>
            {!uom && uomResults && uomResults.length > 0 &&
              <ResultsList
                setItem={setUOM}
                results={uomResults}
              />
            }
          </div>
        </div>
        <div
          style={{display: "block", margin: "10px 0px"}}
        >
          <label>Name</label>
          <div
            className="items-list"
            style={{
              position: "relative"
            }}
          >
            <input
              value={ingName ? ingName : ""}
              onChange={(e) => handleNameChange(e)}
              type="text"
              name="ingredient_name"
            />
            {!ing && ingredientResults && ingredientResults.length > 0 &&
              <ResultsList
                setItem={setIng}
                results={ingredientResults}
              />
            }
          </div>
        </div>
        <button onClick={() => addIngredient()}>Add Ingredient</button>
      </form>
    </div>
  );
}

export default IngredientForm;
