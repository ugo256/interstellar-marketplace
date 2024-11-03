export async function initialisedb(file,db) {
    db.destroy();
    const response = await fetch(file);
    const jsonData = await response.json();
    const initialData = jsonData.map(stock => ({
            ...stock,
        price: Math.random()*500 // Add a new field 'active' with a default value
    }));

    // Bulk insert modified documents into PouchDB
    try {
        // Bulk insert initial items into the database
        const response = await db.bulkDocs(initialData);
        console.log('Database initialized successfully:', response,file);
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
                doc.price += (Math.sqrt( -2.0 * Math.log( Math.random() ) ) * Math.cos( 2.0 * Math.PI * Math.random() ))*doc.price;
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
