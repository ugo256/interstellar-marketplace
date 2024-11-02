// src/components/Sidebar.js

import React from 'react';

function Sidebar({ assets }) {
  return (
    <div style={styles.sidebar}>
      {assets.map((asset, index) => (
        <button key={index} style={styles.button}>
          {asset.index}: 0 {asset.name}
        </button>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    textAlign: 'left',
    fontSize: '1em',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    cursor: 'pointer',
  },
};

export default Sidebar;
