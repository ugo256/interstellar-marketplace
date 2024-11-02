// src/App.js

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import StockInput from './components/StockInput';
import assetsData from './currencies.json';

function App() {
  const [portfolio, setPortfolio] = useState([]);
  
  const assets = assetsData;

  const addStock = (ticker) => {
    setPortfolio([...portfolio, { ticker, price: Math.random() * 1000 }]);
  };

  return (
    <div style={styles.container}>
      <Sidebar assets={assets} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
  },
};

export default App;