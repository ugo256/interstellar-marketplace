import React from 'react';
import {stockPrice} from './stock_pouchdb.js';
import dbs from './stock_pouchdb.js';
import { GetCurrency } from './utils';
import { GetPlanet } from './utils';

function MainContent({ stocks, currPlanet }) {
      return (
    <div>
      <h1>{currPlanet.adj} Stock Prices</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock._id} hidden={currPlanet.name != stock.planet}>
            {stock.id}
            <strong>{stock.name}</strong>: {GetCurrency(currPlanet.currency).symbol}{stock.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

  export default MainContent;
