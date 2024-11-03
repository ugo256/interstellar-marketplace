import React, {useEffect, useState } from 'react';







export const GetCurrency = (currName) => {

    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        fetch('/currencies.json') // Fetch from public directory
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setCurrencies(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const currency = currencies.find(c => c.index === currName);
    return currency ? currency : 'Currency not found';
};

export const GetPlanet = (planetName) => {
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        fetch('/planets.json') // Fetch from public directory
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setPlanets(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const currency = planets.find(c => c.name === planetName);
    return currency ? currency : 'Currency not found';
};