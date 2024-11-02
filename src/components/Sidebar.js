import React from 'react';
import { getCurrency } from './utils';


function Sidebar({ planets }) {
  return (
    <div style={styles.sidebar}>
        <b><h2 style={{margin: '0 5px'}}>Your Portfolio</h2></b>
      {planets.map((planet, index) => (
        <button key={index} style={styles.button}>
          <b><p style={styles.value}>{getCurrency(planet.currency).symbol}0</p></b>
        </button>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#161342',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    'overflow-y': 'auto'
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    textAlign: 'left',
    fontSize: '1em',
    backgroundColor: '#0a2542',
    border: '1px solid #ddd',
    cursor: 'pointer',
    'border-radius': '5px'
  },
  value: {
    fontSize: '1.5em',
    margin: '0 0'
  }
};

export default Sidebar;
