import {getSkewedRandomNumber} from '../updatealgo.js';

export async function initialisedb(file,db) {
    const response = await fetch(file);
    const jsonData = await response.json();
    const initialData = jsonData.map((stock, index) => ({
        ...stock, // Ensure _id is unique, using index if necessary
        price: Math.random() * 400 + 100, // Generate a random price
        _id: stock.index
    }));
    
    console.log(initialData);
    ;

    // Bulk insert modified documents into PouchDB
    try {
        // Bulk insert initial items into the database
        const response = await db.bulkDocs(initialData);
        console.log('Database initialized successfully:', response);
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};


export async function updateAllStock(db) {
    try {
        // Step 1: Fetch all stock items from the database
        const allDocs = await db.allDocs({ include_docs: true });

        // Step 2: Map through all documents, updating each stock quantity
        const updatedDocs = allDocs.rows.map(row => {
            const doc = row.doc;
            if (typeof doc.price === 'number') {
                // PUT THE UPDATING ALGORITHM HERE
                doc.price = Math.max((0.05*(Math.sqrt( -2.0 * Math.log( Math.random() ) ) * Math.cos( 2.0 * Math.PI * Math.random() ))+1.05)*doc.price,0.01);
            }
            return doc;
        });

        // Step 3: Bulk update all documents with the new quantities
        const response = await db.bulkDocs(updatedDocs);
        console.log('Databases updated successfully:', response);
    } catch (error) {
        console.error('Error updating all database:', error);
    }
}
