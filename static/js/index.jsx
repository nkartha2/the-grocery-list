import React from "react";
import ReactDOM from "react-dom";
// import App from "./app";

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

ReactDOM.render(<App/>, document.getElementById("content"));
