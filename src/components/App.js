import React from 'react';
import '../styles/App.css';

// component imports
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <div className="Header">
        Zello
      </div>
      <Board />
    </div>
  );
}

export default App;
