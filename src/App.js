import React, {useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent.js';
import './App.css';
import {stockPrice} from './components/stock_pouchdb.js';
import {fetchCurrencies, currPrice} from './components/currency_pouchdb.js';
import dbs from './components/stock_pouchdb.js';
import { GetCurrency } from './components/utils';
import { GetPlanet } from './components/utils';
import { updateAllStock } from './components/databases.js';

function App() {

  const [selectedPlanet, setSelectedPlanet] = useState(GetPlanet("Earth")); // Default to first planet
  const [stocks, setStocks] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [planets, setPlanets] = useState([]);

    useEffect(() => {
    // Fetch all stocks from the database
    const fetchStocks = async () => {
      try {
        const result = await dbs.allDocs({ include_docs: true });
        const stockList = result.rows.map(row => ({
          name: row.doc.name,
          price: row.doc.price,
          planet: row.doc.planet,
          index: row.doc.index,
        }));
        setStocks(stockList); // Update the stocks state with the fetched data
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks(); // Call the function to fetch stocks
    const intervalId = setInterval(() => {
      fetchStocks();
      updateAllStock(dbs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


  
  

  useEffect(() => {
      fetch('/currencies.json')
          .then((response) => {
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then((data) => setCurrencies(data))
          .catch((error) => console.error('Error fetching data:', error));
  }, []);

  

  useEffect(() => {
      fetch('/planets.json')
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
      <Sidebar planets={planets}  ssp={setSelectedPlanet}/>
    </div>
    <div style={styles.mainContent}>
      <MainContent stocks={stocks} currPlanet={selectedPlanet}/>
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
