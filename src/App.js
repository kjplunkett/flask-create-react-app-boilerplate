import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

const fetchRandomNumber = async () => {
    const response = await fetch('/number');
    const data = await response.json();
    return data.number;
};

function App() {
    const [randomNumber, setRandomNumber] = useState(0);

    const handleClick = async () => {
        const number = await fetchRandomNumber();
        setRandomNumber(number);
    }

    return (
        <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Random number: {randomNumber}</p>
              <button onClick={handleClick}>Randomize</button>
          </header>
        </div>
    );
}

export default App;
