const { cities, states, regions } = require('../data/data.js');

/**
 * Dado um arquivo com dados de regiões, estados e cidades, crie uma função
 *  (mapCities)
 * que retorna um objeto no qual as chaves são as siglas das regiões 
 * (N, NE, CW, SE e S) e os valores
 * são arrays compostos por objetos com o nome da cidade e o nome do estado.
 * {
  N: [
    { city: 'Manaus', state: 'Amazonas' },
    { city: 'Belém', state: 'Pará' },
    { city: 'Porto Nacional', state: 'Tocantins' }
  ],
  SE: [
    { city: 'Lavras', state: 'Minas Gerais' },
    { city: 'Presidente Prudente', state: 'São Paulo' }
  ],
  NE: [
    { city: 'Feira de Santana', state: 'Bahia' },
    { city: 'Touros', state: 'Rio Grande do Norte' },
    { city: 'Jericoacoara', state: 'Ceará' }
  ],
  S: [ { city: 'Cascavel', state: 'Paraná' } ]
}
 */ 

// let citiesWithRegion = { N: [{}]}

const mapCities = () =>{
  return cities.reduce((acc, curr) => {
    
    const state = states.find((element) => element.short === curr.state);

    const obj = {
      city: curr.name,
      state: state.name,
    }

    acc[curr.region].push(obj);
    
    return acc;
  }, {N: [], SE: [], NE: [], S: []})
}

console.log(mapCities());