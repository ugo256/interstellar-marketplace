import React, { useState } from 'react';

function StockInput({ addStock }) {
  const [ticker, setTicker] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticker.trim()) {
      addStock(ticker.toUpperCase());
      setTicker('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        placeholder="Enter stock ticker (e.g., AAPL)"
      />
      <button type="submit">Add Stock</button>
    </form>
  );
}

export default StockInput;