const dbc = new PouchDB('currencies');

async function initialiseCurrency() {
    const response = await fetch('./currencies.json');
    const jsonData = await response.json();
    const initialCurrenciesMORP = jsonData.map(stock => ({
            ...stock,
        price: Math.random()*500 // Add a new field 'active' with a default value
    }));

    // Bulk insert modified documents into PouchDB
    try {
        // Bulk insert initial items into the database
        const response = await dbc.bulkDocs(initialCurrencies);
        console.log('Currency database initialized successfully:', response);
    } catch (error) {
        console.error('Error initializing currencies:', error);
    }
};


// Call the function to initialize the inventory
initialiseCurrency();
