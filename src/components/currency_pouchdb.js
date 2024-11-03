import PouchDB from 'pouchdb';
import { initialisedb } from './databases';
const dbc = new PouchDB('currencies');

export const getCurrency = (id) => {
  dbc.get(id)
    .then(doc => console.log("Currency price:", doc.price))
    .catch(error => console.error("Currency not found:", error));
};

export const currPrice = (id) => {
    try {
        const doc = dbc.get(id); // Fetch the document by ID
        const value = doc.price; // Access the specific field
        console.log(`Value of price for currency ${id}:`, value);
        return value; // Return the value if needed
    } catch (error) {
        console.error('Error fetching document:', error);
    
};
};

export const fetchCurrencies = () => {
    return dbc.allDocs({ include_docs: true }).then(result => {
        return result.rows.map(row => row.doc);
    });
};

// Call the function to initialize the inventory

initialisedb('./currencies.json', dbc);
  
export default dbc;
