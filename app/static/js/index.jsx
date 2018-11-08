import * as React from "react";
import ReactDOM from "react-dom";

import Bills from "./forms/recipe_form.tsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Shekly</h1>
                {/* <RecipeForm/> */}
                <Bills/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("content"));


                {/* <h3>{this.state.overDueBillsTotal}</h3>
                {/* <h3>HELLO: {paidBills}</h3>
                <h3>overdue: {thisoverDueBillsTotal}</h3>
                <h3>outstanding: {this.outstandingBillsTotal} </h3> */}
                // <ul>
                //     {this.billLists().map((bill, i)=>(
                //         <li key={i}>
                //             {this.billItem(bill)}
                //         </li>
                //     ))}
                // </ul> */}