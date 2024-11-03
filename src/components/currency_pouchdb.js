import PouchDB from 'pouchdb';
import { initialisedb } from './databases';
const dbc = new PouchDB('currencies');

export const getCurrency = (id) => {
  dbc.get(id)
    .then(doc => console.log("Currency price:", doc.price))
    .catch(error => console.error("Currency not found:", error));
};

export const fetchCurrencies = () => {
    return dbc.allDocs({ include_docs: true }).then(result => {
        return result.rows.map(row => row.doc);
    });
};

// Call the function to initialize the inventory
initialisedb('./currencies.json', dbc);
dbc.put({
  _id: 'UNI',
  _rev: dbc._rev,
  price: 1.0})
