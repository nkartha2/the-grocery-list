import React, { useState } from 'react';
import { Dispatch } from 'redux';
import axiosClient from "./axiosClient";
import { Ingredient, UOM } from "./store/recipe_types";
import { addRecipeIng } from "./store/actions";
import { connect } from 'react-redux';
import DropDownList from './ui_components/DropdownSelect';
import { AppState } from './store/index';
import FormWrapper from './ui_components/FormWrapper';

function IngredientForm(props: any): JSX.Element {
  const [ingredientResults, setIngResults] = useState<Ingredient[] | []>([]);
  const [ing, setIng] = useState<Ingredient| null>(null);
  const [ingName, setIngName] = useState<string>("");
  const [uomResults, setUOMResults] = useState<UOM[] | []>([]);
  const [uom, setUOM] = useState<UOM| null>(null);
  const [uomName, setUomName] = useState<string>("");
  const [quantity, setQuantity] = useState("");
  const [showUOMDropdown, setShowUOMDropdown] = useState<boolean>(false);
  const [showIngDropdown, setShowIngDropdown] = useState<boolean>(false);

  function resetForm () {
    setIngResults([]);
    setIngName("");
    setIng(null);
    setUOMResults([]);
    setUOM(null);
    setUomName("");
    setQuantity("");
    setShowUOMDropdown(false);
    setShowIngDropdown(false);
  }

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
      searchIngredients(e.currentTarget.value);
      setIngName(e.currentTarget.value);
      setIng(null);
    } else {
      setIngResults([]);
      setIng(null);
      setIngName("");
    }
  }

  const handleUnitofMeasureChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.value) {
      getUnitofMeasure(e.currentTarget.value);
      setUomName(e.currentTarget.value);
      setUOM(null);
    } else {
      setUOM(null);
      setUOMResults([]);
      setUomName("");
    }
  }

  const addIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (quantity && ing) {
      props.onAddClick(ing, quantity, uom ? uom : "")
      resetForm();
    }
  }

  return (
    <FormWrapper>
      <div className="sub">
        <h4>Add Ingredient</h4>
        <form
          autoComplete="off"
        >
          <div
            style={{display: "block", margin: "10px 0px"}}
          >
            <label>Quantity</label>
            <input
              className="form_input"
              value={quantity ? quantity : ""}
              onChange={(e) => setQuantity(e.currentTarget.value)}
              type="number"
              name="ingredient_quantity"
            />
          </div>
          <div
            style={{display: "block", margin: "10px 0px"}}
          >
            <label>Unit of Measure</label>
            <div
              className="items-list"
              style={{
                position: "relative",
                display: "inline-block"
              }}
            >
              <input
                className="form_input"
                value={ uom ? uom.name : uomName}
                onChange={(e) => handleUnitofMeasureChange(e)}
                onFocus={(e) => setShowUOMDropdown(true)}
                type="text"
                name="uom"
              />
              {!uom && showUOMDropdown && uomResults && uomResults.length > 0 &&
                <DropDownList
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
                position: "relative",
                display: "inline-block"
              }}
            >
              <input
                className="form_input"
                value={ ing ? ing.name : ingName}
                onChange={(e) => handleNameChange(e)}
                onFocus={(e) => setShowIngDropdown(true)}
                type="text"
                name="ingredient_name"
              />
              {!ing && showIngDropdown && ingredientResults && ingredientResults.length > 0 &&
                <DropDownList
                  setItem={setIng}
                  results={ingredientResults}
                />
              }
            </div>
          </div>
          <button
            className="form_button"
            onClick={(e) => addIngredient(e)}
          >
            Add Ingredient
          </button>
        </form>
      </div>
    </FormWrapper>
  );
}

const mapStateToProps = (state: AppState) => {
  return {state}
}


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onAddClick: (ing: Ingredient, quantity: string, uom: UOM) => dispatch(
      addRecipeIng({
        ing: ing,
        quantity: quantity,
        uom: uom
      })
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientForm);
