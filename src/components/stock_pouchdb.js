import PouchDB from 'pouchdb';
import { initialisedb } from './databases.js';
const dbs = new PouchDB('stocks');

export const getStocks = (id) => {
  dbs.get(id)
    .then(doc => console.log("Stock price:", doc.price))
    .catch(error => console.error("Stock not found:", error));
};

export const fetchStocks = () => {
    return dbs.allDocs({ include_docs: true }).then(result => {
        return result.rows.map(row => row.doc);
    });
};

// Call the function to initialize the inventory
initialisedb('./stocks.json', dbs);
