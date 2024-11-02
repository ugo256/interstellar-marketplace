import React from 'react';

function StockItem({ stock }) {
  return (
    <li>
      <strong>{stock.ticker}</strong>: ${stock.price.toFixed(2)}
    </li>
  );
}

export default StockItem;