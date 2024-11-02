import React from 'react';
import StockItem from './StockItem';

function Portfolio({ portfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.length === 0 ? (
        <p>No stocks added.</p>
      ) : (
        <ul>
          {portfolio.map((stock, index) => (
            <StockItem key={index} stock={stock} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Portfolio;