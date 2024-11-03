import React, {useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent.js';
import currData from './components/currencies.json';
import planetData from './components/planets.json';
import './App.css';
import {fetchStocks} from './components/stock_pouchdb.js';
import {fetchCurrencies} from './components/currency_pouchdb.js';

function App() {
  
  const [stocks, setStocks] = useState([]);
  
  useEffect(() => {
      loadStocks();
  }, []);
  
  const loadStocks = () => {
      fetchStocks().then(stocks => setStocks(stocks));
  };
  
  const currencies = currData;
  const planets = planetData;
  

  return (
    <div style={styles.container}>
    <div>
      <Sidebar planets={planets} />
    </div>
    <div style={styles.mainContent}>
      <MainContent stocks={stocks}/>
    </div>
    </div>);
};

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
