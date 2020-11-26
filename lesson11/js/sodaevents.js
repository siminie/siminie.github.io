const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject ['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Soda Springs"){
    
    let card = document.createElement('section');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let h2 = document.createElement('h2');
    var elem = document.createElement('hr');

    document.body.appendChild(elem);
    
    p1.textContent = towns[i].events[0];
    p2.textContent = towns[i].events[1];
    p3.textContent = towns[i].events[2];
    h2.textContent = 'Upcoming Events:';

    card.appendChild(h2);
    card.appendChild(elem);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);

    document.querySelector('div.events').appendChild(card);
    elem.setAttribute("width", "550px");

    }}
  });