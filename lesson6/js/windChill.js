/*
 * Defining Table
 * Input(s): Receives a temperature in Fahrenheit, wind speed in mph. 
 * Processing: Store value returned by WindChill. 
 * Output(s): WindChill return value.
 */

function windChillInfo() {
    let temperature = parseFloat(document.getElementById("temperature").innerHTML);
    let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
    let calculatedChill = windChill(temperature, windSpeed);
    windChill(temperature, windSpeed);

    document.getElementById("calculateChill").innerHTML = calculatedChill + '&#8457;';

}

/*
 * Defining Table
 * Input(s): tempF and speed from the calling function.
 * Processing: Calculate the windchill from the values received.
 * Output(s): Return the calculated value.
 */

function windChill(tempF, speed) {

    if (tempF < 50 && speed > 3) {

        let calculated = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(
            speed, 0.16));
        calculated = calculated.toFixed(0);

        console.log('windchill calculated: ' + calculated);

        return calculated
    } else {
        chill = "N/A"
        return chill
    }
}