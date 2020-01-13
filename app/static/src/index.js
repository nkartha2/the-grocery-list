import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import MainNav from './MainNav';
import './styles/_base.scss';

import rootReducer from './store/index';

import './index.css';
import App from './App';
import RecipeForm from "./RecipeForm";
import Recipes from "./Recipes";
import AdminAddIngredient from './admin/AdminAddIngredient';
import UOMForm from './admin/AdminAddUoM';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);


const routing = (
  <Provider store={store}>
    <Router>
      <div className="container">
        <MainNav/>
        <Route path="/" component={App} />
        <Route path="/admin/uom" component={UOMForm} />
        <Route path="/admin/recipe" component={RecipeForm} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/admin/ingredient" component={AdminAddIngredient} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
