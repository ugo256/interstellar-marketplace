import PouchDB from 'pouchdb'
import {update_s, update_c} from './updatealgo.js'

// Create a database named Stocks
const db_s = new PouchDB('stocks');

async function importJSON_s() {
    const response = await fetch('./components/stocks.json'); // Path to your JSON file
    const jsonData = await response.json();
};
    
export const addStock = (ticker, name, price) => {
    const doc = {
        _id: ticker, // Unique ID based on ticker
        name,
        price
    };
    return db_s.put(doc);
};

// Function to fetch all stock
export const fetchStocks = () => {
    return db_s.allDocs({ include_docs: true }).then(result => {
        return result.rows.map(row => row.doc);
    });
};

// Function to update a stock
export const updateStock = (id, updatedData) => {
    return db_s.get(id).then(doc => {
        const updatedDoc = { ...doc, ...updatedData };
        return db_s.put(updatedDoc);
    });
};

// Function to delete a stock
export const deleteStock = (id) => {
    return db_s.get(id).then(doc => {
        return db_s.remove(doc);
    });
};

const db_c = new PouchDB('currencies');

async function importJSON_s() {
    const response = await fetch('./components/currencies.json'); // Path to your JSON file
    const jsonData = await response.json();
};

// Function to fetch all currencies
export const fetchCurrencies = () => {
    return db_c.allDocs({ include_docs: true }).then(result => {
        return result.rows.map(row => row.doc);
    });
};

// Function to update a stock
export const updateCurrency = (id, updatedData) => {
    return db_c.get(id).then(doc => {
        const updatedDoc = { ...doc, ...updatedData };
        return db_c.put(updatedDoc);
    });
};

const updateAll = async () => {
    try {
        const result_c = await db_c.allDocs({ include_docs: true });
        const result_s = await db_s.allDocs({ include_docs: true });

        const updatedDocs_c = result_c.rows.map(row => {
            const doc = row.doc;

            // Ensure the document has a 'value' field to update
            if (typeof doc.value === 'number') {
                // Apply the formula: Multiply the value by 2
                doc.value = doc.value + update_c();
            }

            // Always include the _id and _rev fields to avoid conflicts during update
            return { ...doc };
        });

        const updatedDocs_s = result_s.rows.map(row => {
            const doc = row.doc;

            // Ensure the document has a 'value' field to update
            if (typeof doc.value === 'number') {
                // Apply the formula: Multiply the value by 2
                doc.value = doc.value + update_s();
            }

            // Always include the _id and _rev fields to avoid conflicts during update
            return { ...doc };
        });


        // Step 3: Perform bulk update
        const response_c = await db_c.bulkDocs(updatedDocs_c);
        console.log('All currencies updated');
        const response_s = await db_s.bulkDocs(updatedDocs_s);
        console.log('All stocks updated')
    } catch (error) {
        console.error('Error updating values:', error);
    }
};

