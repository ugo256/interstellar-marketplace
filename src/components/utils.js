import planetsData from './planets.json';
import currencyData from './currencies.json';

export const getCurrency = (currName) => {
    const currency = currencyData.find(c => c.id === currName);
    return currency ? currency : 'Currency not found';
};

export const getPlanet = (planetName) => {
    const currency = planetsData.find(c => c.id === planetName);
    return currency ? currency : 'Currency not found';
};