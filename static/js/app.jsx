import React from "react";
import RecipeForm from "./forms/recipe_form.tsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Shekly</h1>
                <RecipeForm/>
            </div>
        );
    }
}