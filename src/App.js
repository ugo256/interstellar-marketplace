// src/App.js

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import StockInput from './components/StockInput';
import assetsData from './currencies.json';
import {addStock, fetchStocks, updateStock, deleteStock, addCurrency, fetchCurrencies, updateCurrency, deleteCurrency} from './pouchdb.js';

function App() {
  const [stocks, setStocks] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [id, setID] = useState(null);
  
  useEffect(() => {
      loadStocks();
  }, []);
  
  const loadStocks = () => {
      fetchStocks().then(stocks => setStocks(stock));
  };

  const handleAdd = () => {
    if (!ticker || !price) return; // Basic validation

      addPerson(ticker, parseFloat(price)).then(() => {
          setName('');
          setAge('');
          loadPeople(); // Reload data
      });
  };
  
  const assets = assetsData;
  

  return (
    <div style={styles.container}>
      <Sidebar assets={assets} />
    </div>
    <input 
      type="text"
      placeholder="Name"
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <input
      type="number"
      placeholder="Age"
      value={age}
      onChange={e => setAge(e.target.value)}
    />
    <button onClick={selectedId ? handleUpdate : handleAdd}>
      {selectedId ? 'Update Person' : 'Add Person'}
    </button>
    <div>
    {stocks.map(stock => (
      <li key={stock._id}>
      <strong>{stock.name}</strong> (Price: {stock.price}) </li>
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
