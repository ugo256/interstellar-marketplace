import {initialisedb} from './databases.js';
const dbc = new PouchDB('currencies');

export const getCurrency = (id) => {
  db.get(code)
    .then(doc => console.log("Currency price:", doc.price))
    .catch(error => console.error("Currency not found:", error));
};

// Call the function to initialize the inventory
initialisedb('./currencies.json', dbc);
dbc.put({
  _id: 'UNI',
  _rev: doc._rev,
  price: 1.0})
