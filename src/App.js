import React, {useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import currData from './components/currencies.json';
import planetData from './components/planets.json';
import './App.css';
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
      fetchStocks().then(stocks => setStocks(stocks));
  };

  const handleAdd = () => {
    if (!id || !price) return;

      addStock(id, name, parseFloat(price)).then(() => {
          setName('');
          setPrice('');
          loadStocks();
      });
  };
  
  const currencies = currData;
  const planets = planetData;
  

  return (
    <div>
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
      placeholder="Price"
      value={price}
      onChange={e => setPrice(e.target.value)}
    />
    <button onClick={handleAdd}>
      {'Add Stock'}
    </button>
    <div>
    {stocks.map((stock) => (
      <li key={stock._id}>
      <strong>{stock.name}</strong> (Price: {stock.price}) </li>
    ))}
    </div>
    </div>);
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
