const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=da128f49ff6764aa1db304e6e5202919&units=imperial";

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

async function retrieveData() {
    let response = await fetch(apiUrl);

    if (response.ok) { 

    let json = await response.json();
    console.log("data from function: " + JSON.stringify(json));
    var todaysdate = new Date();

        const dayone = dayNames[todaysdate.getDay() + 1];
        const daytwo = dayNames[todaysdate.getDay() + 2];
        const daythree = dayNames[todaysdate.getDay() + 3];

        document.getElementById('day1').innerHTML = dayone;
        document.getElementById('day2').innerHTML = daytwo;
        document.getElementById('day3').innerHTML = daythree;

        var weatherLogo = "https://openweathermap.org/img/wn/";
        const forecastArr = json.list;
        let k = 1;
        for (var i = 0; i < forecastArr.length; i++) {
            var dt = forecastArr[i].dt_txt;
            var time = dt.includes('18:00:00');

            console.log ("filter:" + time);
            if (time == true && k <= 5) {
                console.log ("inside if statement k:" + k);
                var temperature = forecastArr[i].main.temp;
                console.log(temperature);
                document.getElementById(k + "temp").innerHTML = temperature;
                document.getElementById(k + "img").setAttribute("src", weatherLogo + forecastArr[i].weather[0].icon + "@2x.png");
                document.getElementById(k + "img").setAttribute("alt", forecastArr[i].weather[0].description);
                k++;
            }
        }

    } else {
        alert("HTTP-Error: " + response.status);
    }
}   

retrieveData();