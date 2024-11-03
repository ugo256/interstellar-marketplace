import React from 'react';
import {stockPrice} from './stock_pouchdb.js';
import dbs from './stock_pouchdb.js';


function MainContent({ stocks }) {

      return (
    <div>
      <h1>Stock Prices</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock._id}>
            {stock.id} 
            <strong>{stock.name}</strong>: ${stock.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

  export default MainContent;
