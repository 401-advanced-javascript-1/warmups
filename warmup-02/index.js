'use strict';

const superagent = require('superagent');
const arrayOfPromises = [];

function fetchPeopleWithPromises() {
  const url = 'https://swapi.co/api/people/';

  return superagent.get(url)
    .then(result => {
      const urls = result.body.results.map(obj => obj.url);
      urls.forEach(url => {
        arrayOfPromises.push(Promise.resolve(superagent.get(url)));
      });
      Promise.all(arrayOfPromises).then(response => {
        const names = response.map(response=>response.body.name);
        console.log(names);
      });
    })
    .catch(err => console.log(err));
};

async function fetchPeopleWithAsync() {
  return await fetchPeopleWithPromises();
};

// fetchPeopleWithAsync();
fetchPeopleWithPromises();
