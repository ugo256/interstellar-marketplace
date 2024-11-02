import {initialisedb} from './databases.js';
const dbc = new PouchDB('currencies');

// Call the function to initialize the inventory
initialisedb('./currencies.json', dbc);
dbc.put({
  _id: 'UNI',
  _rev: doc._rev,
  price: 1.0})
