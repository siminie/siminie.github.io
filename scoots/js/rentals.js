const requestURL = '/scoots/data/rentalsdata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals'];
    let table = document.getElementById("tableId");
    let rowArray = table.firstElementChild.getElementsByTagName("tr");
    let j = 0;
    for(let i = 2; i < rowArray.length; i++) {
      rowArray[i].children[0].innerHTML = rentals[j].name;
      rowArray[i].children[1].innerHTML = rentals[j].maxpersons;
      rowArray[i].children[2].innerHTML = rentals[j].reservation.halfday;
      rowArray[i].children[3].innerHTML = rentals[j].reservation.fullday;
      rowArray[i].children[4].innerHTML = rentals[j].walkin.halfday;
      rowArray[i].children[5].innerHTML = rentals[j].walkin.fullday;
      j++;
    }
  });