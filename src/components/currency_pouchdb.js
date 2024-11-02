import {initialisedb} from './databases.js';
const dbc = new PouchDB('currencies');

// Call the function to initialize the inventory
initialisedb('./currencies.json', dbc);
