import React from 'react';
import './App.css';
import Zamowienie from './components/zamowienie';
import Skomponuj from './components/skomponuj';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Order pizza</h1>
      </header>
      <div className="content">
        <Skomponuj />
        <Zamowienie />
      </div>
    </div>
  );
}

export default App;
