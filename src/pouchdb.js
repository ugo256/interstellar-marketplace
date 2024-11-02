import PouchDB from 'pouchdb'

// Create a database named Stocks
const db_s = new PouchDB('stocks');

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

export const addCurrency = (ticker, name, price) => {
    const doc = {
        _id: ticker, // Unique ID based on ticker
        name,
        price
    };
    return db_c.put(doc);
};

// Function to fetch all stock
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

// Function to delete a stock
export const deleteCurrency = (id) => {
    return db_c.get(id).then(doc => {
        return db_c.remove(doc);
    });
};
