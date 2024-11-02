
async function updateAllStock(db) {
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
        console.log('All stocks updated successfully:', response);
    } catch (error) {
        console.error('Error updating all stocks:', error);
    }
}
