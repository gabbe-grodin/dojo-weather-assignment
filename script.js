let element = document.getElementById("cookie-box");

function removeCookieAlert() {
        element.remove();
}

// when drop-down menu option is changed, convert array of forecasted temps to corresponding scale.

let todaysHigh = document.getElementById('todays-high').innerText;
let todaysLow = document.getElementById('todays-low').innerText;
let tomorrowsHigh = document.getElementById('tomorrows-high').innerText;
let tomorrowsLow = document.getElementById('tomorrows-low').innerText;
let fridaysHigh = document.getElementById('fridays-high').innerText;
let fridaysLow = document.getElementById('fridays-low').innerText;
let saturdaysHigh = document.getElementById('saturdays-high').innerText;
let saturdaysLow = document.getElementById('saturdays-low').innerText;

let forecastedTempsForTheWeek = [todaysHigh,todaysLow,tomorrowsHigh,tomorrowsLow,fridaysHigh,fridaysLow,saturdaysHigh,saturdaysLow];

console.log(forecastedTempsForTheWeek);

let option = document.querySelector('option');

function convertTemp() {
        console.log("changing select element working");
        // create conditional to check if option element has id of 'cel' or 'fahr': 
        if (option.innerText === "&deg;C") { // if cel, return current values of forecastedTempsForTheWeek array to the dom
                console.log(forecastedTempsForTheWeek);
        } else { // if option has an id of 'fahr', return converted values of array to the dom:
                for (let i = 0; i <= forecastedTempsForTheWeek.length - 1; i++) {
                        forecastedTempsForTheWeek = (forecastedTempsForTheWeek[i] - 32) * 5 / 9;
                        console.log(forecastedTempsForTheWeek);
                }
        }
}