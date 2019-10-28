import React from 'react';
import { createStore } from 'redux';
import reducer from './store/index';

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
