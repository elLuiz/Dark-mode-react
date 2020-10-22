import React from 'react';
import './App.css';
import Routes from './Routes';
import Theme from './Context/Theme';

function App() {
  return (
    <Theme.Provider value="light">
      <div className="App">
        <Routes />
      </div>
    </Theme.Provider>
  );
}

export default App;
