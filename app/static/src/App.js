import React from 'react';
import { createStore } from 'redux';
import rootReducer from './store/index';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
