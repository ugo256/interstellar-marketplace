import React from 'react';
import {stockPrice} from './stock_pouchdb.js';
import dbs from './stock_pouchdb.js';
import { GetCurrency } from './utils';
import { GetPlanet } from './utils';

function MainContent({ stocks, currPlanet }) {
    const curr = GetCurrency(currPlanet.currency);
      return (
    <div>
      <h1>{currPlanet.adj} Stock Prices</h1>
      <h3>currency: {curr.name} ({curr.index})</h3>
      <ul>
        {stocks.map((stock) => (
          <li key={stock._id} hidden={currPlanet.name != stock.planet}>
            {stock.id}
            <strong>{stock.index} - {stock.name}</strong>: {curr.symbol}{stock.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

  export default MainContent;
