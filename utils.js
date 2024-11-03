import planetsData from './public/planets.json';
import currencyData from './public/currencies.json';

export const getCurrency = (currName) => {
    const currency = currencyData.find(c => c.index === currName);
    return currency ? currency : 'Currency not found';
};

export const getPlanet = (planetName) => {
    const currency = planetsData.find(c => c.index === planetName);
    return currency ? currency : 'Currency not found';
};