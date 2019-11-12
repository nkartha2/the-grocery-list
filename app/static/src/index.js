import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import rootReducer from './store/index';

import './index.css';
import App from './App';
import RecipeForm from "./RecipeForm";
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);


const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/add/recipe" component={RecipeForm} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
