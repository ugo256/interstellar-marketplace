import PouchDB from 'pouchdb'

// Create a database named Stocks
const db = new PouchDB('stocks');

export const addStock = (ticker, name, price) => {
    const doc = {
        _id: ticker, // Unique ID based on ticker
        name,
        price
    };
    return db.put(doc);
};

// Function to fetch all documents
export const fetchStocks = () => {
    return db.allDocs({ include_docs: true }).then(result => {
        return result.rows.map(row => row.doc);
    });
};

// Function to update a document
export const updateStock = (id, updatedData) => {
    return db.get(id).then(doc => {
        const updatedDoc = { ...doc, ...updatedData };
        return db.put(updatedDoc);
    });
};

// Function to delete a document
export const deleteStock = (id) => {
    return db.get(id).then(doc => {
        return db.remove(doc);
    });
};