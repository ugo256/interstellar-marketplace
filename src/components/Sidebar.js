import React, { useState } from 'react';
import { GetCurrency } from './utils';
import { GetPlanet } from './utils';

function Sidebar({ planets, ssp }) {

  const onClick =((planet) => {ssp(planet)}); 

  return (
    <div style={styles.sidebar}>
      
        <b><h2 style={{margin: '0 5px'}}>Your Portfolio</h2></b>
      {planets.map((planet, index) => (
        <button key={index} style={styles.button} className='sbbutton' onClick={() => onClick(planet)} >
          
          <b><p style={styles.value}>{GetCurrency(planet.currency).symbol}0</p></b>
        </button>
      ))}
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    height: '100vh',
    backgroundColor: '#161342',
    font: 'Courier New',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    color: '#daf0b4'
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '5px 0',
    textAlign: 'left',
    font: 'Courier New',
    fontSize: '1em',
    border: '1px solid #2f4296',
    cursor: 'pointer',
    borderRadius: '5px',
    color: '#daf0b4',
    transition: 'background-color 0.2s ease'
  },
  value: {
    fontSize: '1.5em',
    margin: '0 0'
  }
};

export default Sidebar;
