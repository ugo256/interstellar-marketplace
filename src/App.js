import React, {useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent.js';
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
  
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
      fetch('/currencies.json') // Fetch from public directory
          .then((response) => {
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then((data) => setCurrencies(data))
          .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
      fetch('/planets.json') // Fetch from public directory
          .then((response) => {
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then((data) => setPlanets(data))
          .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

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
