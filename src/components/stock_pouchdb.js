import {initialisedb} from './databases.js';
const dbs = new PouchDB('stocks');

export const getStocks = (id) => {
  dbs.get(code)
    .then(doc => console.log("Stock price:", doc.price))
    .catch(error => console.error("Stock not found:", error));
};

// Call the function to initialize the inventory
initialisedb('./stocks.json', dbs);
