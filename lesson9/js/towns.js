const requestURL = '/lesson9/js/townsdata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        //let image = document.createElement('section');
        let h2 = document.createElement('h2');
        let line = document.createElement('h4');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        let photo = document.createElement('img');

        h2.textContent = towns[i].name;
        card.appendChild(h2);

        line.textContent = towns[i].motto;
        card.appendChild(line);

        year.textContent = 'Year Founded: ' + towns[i].yearFounded;
        card.appendChild(year);

        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        card.appendChild(pop);

        rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        card.appendChild(rain);

        photo.setAttribute('src', towns[i].photo);
        card.appendChild(photo);


        document.querySelector('div.cards').appendChild(card);
        //document.querySelector('div.images').appendChild(image);
        }
  });