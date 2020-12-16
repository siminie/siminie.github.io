const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.508329&lon=-86.945831&units=imperial&APPID=da128f49ff6764aa1db304e6e5202919";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const weather = jsObject['weather'];
    const main =jsObject['main'];
    const wind =jsObject['wind'];
    document.getElementById('temp').textContent = main.temp + '°F';
    document.getElementById('humid').textContent = main.humidity + '%';
    document.getElementById('speed').textContent = wind.speed + 'mph';
    document.getElementById('weath').textContent = weather[0].main;
    windChillInfo(main, wind);
  });


/*
 * Defining Table
 * Input(s): Receives a temperature in Fahrenheit, wind speed in mph. 
 * Processing: Store value returned by WindChill. 
 * Output(s): WindChill return value.
 */

function windChillInfo(main, wind){
    let temperature = main.temp;
    let Windspeed = wind.speed;
    let calculatedChill = windChill(temperature, Windspeed);
    windChill(temperature, Windspeed);
    document.getElementById('chill').innerHTML = calculatedChill + '&#8457;';
    
}

/*
 * Defining Table
 * Input(s): tempF and speed from the calling function.
 * Processing: Calculate the windchill from the values received.
 * Output(s): Return the calculated value.
 */

function windChill(tempF, speed) {
    if (tempF < 50 && speed > 3) {
    let chill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    chill = chill.toFixed(0);
    return chill;
    }
    else {
    chill = "N/A"
    return chill;
    }
}