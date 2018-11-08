import * as React from "react";

export default class RecipeForm extends React.Component<{}, {}> {
    render() {
        return (
            <form
                id="add-recipe"
                method="post"
                className="add-recipe-form"
            >
                <h2>Add a Recipe</h2>
                <label htmlFor="recipe-name">Name</label>
                <input type="text" id="reciple-name"/>
                <label htmlFor="recipe-link">Link</label>
                <input type="text" id="reciple-link"/>
                <select id="recipe-state">
                    <option value="approve">Love it</option>
                    <option value="pending">Try it</option>
                    <option value="archive">Ugh. No.</option>
                </select>
            </form>
        );
    }
}
