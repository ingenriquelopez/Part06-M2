import React from 'react';
import './App.css';

import Cards from './components/Cards.jsx';

import data from './data.js';
import styles from './App.module.css';
import SearchBar from './components/SearchBar.jsx';

function App() {
  return (
    <div className= {styles.app}>
      <div>
        <Cards
          cities={data}
        />
      </div>

      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
