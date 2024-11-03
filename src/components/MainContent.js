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
        {stocks.filter(function(s){
    return s.planet == currPlanet.name;}).map((stock) => (
          <li key={stock._id}>
            {stock.id}
            <strong>{stock.name}</strong>: {GetCurrency(currPlanet.currency).symbol}{stock.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

  export default MainContent;
