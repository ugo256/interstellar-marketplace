import {initialisedb} from './databases.js';
const dbs = new PouchDB('stocks');

// Call the function to initialize the inventory
initialisedb('./stocks.json', dbs);
