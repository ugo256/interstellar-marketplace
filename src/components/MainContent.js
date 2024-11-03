import React from 'react';

function MainContent({ stocks }) {
    return (
        <div>
            
        {stocks.map((stock) => (
            <li key={stock._id}>
            <strong>{stock.name}</strong> (Price: {stock.price})
            </li>
            ))}
        </div>
    );
  };

  export default MainContent;