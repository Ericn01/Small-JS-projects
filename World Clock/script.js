
const NUM_CITIES = 20; // number of cities to be displayed on the grid.

/* Trying to work with objects / classes in javascript. This isn't the best example, but it works fine*/
class CityClock{
    constructor(cityName, date, time, country, cityImg){
        this.cityName = cityName;
        this.date = date;
        this.time = time;
        this.country = country;
        this.cityImg = cityImg;
    }
}
// function that is called every second using setInterval(), in charge of displaying the cities on their designated grid cell 
setInterval(function displayCities(){
    let cities = citiesContainer();
    for (let i = 1; i <= NUM_CITIES; i++){
        let elemId = 'c' + i;
        let currentCityGrid = document.getElementById(elemId);
        let currentCityObj = cities[i - 1];
        currentCityGrid.innerHTML = "<h2> " + currentCityObj.cityName + ", " + currentCityObj.country + "<h2>" + " <h3> " + currentCityObj.date +  "<h1>" + currentCityObj.time;
        currentCityGrid.style.backgroundImage = currentCityObj.cityImg;
    }
    
}, 1000);

function calcTime(offset) {
    // local (machine) time/date
    let date = new Date();
    // conversion into milliseconds
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    // New date for the given location
    let newDate = new Date(utc + (3600000 * parseFloat(offset)));
    return newDate;
}

// Collection of the UTC offsets in hours for different cities
const offsets = [
    '-6.0', // Calgary
    '-4.0', // Toronto
    '-7.0', // Seattle
    '-5.0', // Guadalajara
    '-6.0', // Managua
    '-3.0',  // Rio De Janeiro
    '-5.0', // Houston
    '+2.0', // Cairo
    '+2.0', // Paris
    '+1.0', // London
    '+1.0', // Dublin
    '+5.5', // New Delhi
    '+3.0', // Moscow
    '+12.0', // Auckland
    '+7.0', // Jakarta
    '+9.0', // Seoul
    '+9.0', // Tokyo
    '+2.0', // Warsaw
    '+0.0', // Reykjavik - UTC
    '+8.0'  // Chongqing
];
/**
 * Creates the city objects and pushed them into an array after being created.
 * @returns the array containing all of the CityClock objects
 */
function citiesContainer(){
    let cities = [];
    for (let i = 0; i < offsets.length; i++){
        let cityDate = calcTime(offsets[i]);
        let dateString = cityDate.toString().substring(0, 15);
        let time = cityDate.toString().substring(15, 25);
        switch(i){ // foolish design at best - I need to find a better way to make this work
            case 0: let c1 = new CityClock('Calgary', dateString, time, "Canada","url('city-img/calgary.jpeg')"); cities.push(c1); break;
            case 1: let c2 = new CityClock('Toronto', dateString, time, "Canada", "url('city-img/toronto.jpeg')"); cities.push(c2);break;
            case 2: let c3 = new CityClock('Seattle', dateString, time, "United States", "url('city-img/seattle.jpeg')");  cities.push(c3);break;
            case 3: let c4 = new CityClock('Guadalajara', dateString, time, "Mexico", "url('city-img/guadalajara.jpeg')");  cities.push(c4);break;
            case 4: let c5 = new CityClock('Managua', dateString, time, "Nicaragua", "url('city-img/managua.jpeg')");  cities.push(c5);break;
            case 5: let c6 = new CityClock('Rio de Janeiro', dateString, time, "Brazil", "url('city-img/riodejaneiro.jpeg')");  cities.push(c6);break;
            case 6: let c7 = new CityClock('Houston', dateString, time, "United States", "url('city-img/houston.jpeg')"); cities.push(c7);break;
            case 7: let c8 = new CityClock('Cairo', dateString, time, "Egypt", "url('city-img/cairo.jpeg')"); cities.push(c8);break;
            case 8: let c9 = new CityClock('Paris', dateString, time, "France", "url('city-img/paris.jpeg')"); cities.push(c9);break;
            case 9: let c10 = new CityClock('London', dateString, time, "England", "url('city-img/london.jpeg')"); cities.push(c10); break;
            case 10: let c11 = new CityClock('Dublin', dateString, time, "Ireland", "url('city-img/dublin.jpeg')"); cities.push(c11); break;
            case 11: let c12 = new CityClock('New Delhi', dateString, time, "India", "url('city-img/new-delhi.jpeg')"); cities.push(c12);break;
            case 12: let c13 = new CityClock('Moscow', dateString, time, "Russia", "url('city-img/moscow.jpeg')"); cities.push(c13);break;
            case 13: let c14 = new CityClock('Auckland', dateString, time, "New Zealand", "url('city-img/auckland.jpeg')"); cities.push(c14); break;
            case 14: let c15 = new CityClock('Jakarta', dateString, time, "Indonesia", "url('city-img/jakarta.jpeg')");cities.push(c15); break;
            case 15: let c16 = new CityClock('Seoul', dateString, time, "South Korea", "url('city-img/seoul.jpeg')"); cities.push(c16); break;
            case 16: let c17 = new CityClock('Tokyo', dateString, time, "Japan", "url('city-img/tokyo.png')"); cities.push(c17); break;
            case 17: let c18 = new CityClock('Warsaw', dateString, time, "Poland", "url('city-img/warsaw.jpeg')"); cities.push(c18);break;
            case 18: let c19 = new CityClock('Reykjavik', dateString, time, "Iceland", "url('city-img/reykjavik.jpeg')"); cities.push(c19); break;
            case 19: let c20 = new CityClock('Chongqing', dateString, time, "China", "url('city-img/chongqing.jpeg')"); cities.push(c20);break;
            default: console.log('This should not show up');
        }
    }
    return cities;
}

/*
* Note:
* The functionality that I wanted out of this project is complete. I could add more features such as daylight savings time conversion for maximum accuracy,
* but as of right now it works just as I wanted. I greatly enjoyed working on this challenge.
*/