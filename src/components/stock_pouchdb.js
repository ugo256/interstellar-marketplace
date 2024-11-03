import PouchDB from 'pouchdb';
import { initialisedb } from './databases.js';
const dbs = new PouchDB('stocks');

export const getStocks = (id) => {
  dbs.get(id)
    .then(doc => console.log("Stock price:", doc.price))
    .catch(error => console.error("Stock not found:", error));
};

export const stockPrice = (id) => {
    try {
        const doc = dbs.get(id); // Fetch the document by ID
        const value = doc.price; // Access the specific field
        console.log(`Value of price for stock ${id}:`, value);
        return value; // Return the value if needed
    } catch (error) {
        console.error('Error fetching document:', error);
    
};
};

export const fetchStocks = () => {
    return dbs.allDocs({ include_docs: true }).then(result => {
        return result.rows.map(row => row.doc);
    });
};

// Call the function to initialize the inventory
initialisedb('./stocks.json', dbs);

export default dbs;
