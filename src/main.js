import { API_KEY } from '../slightlyHidden';
import './style.css'

const search = document.getElementById('search');

async function getWeatherOnLoad() {
    if(localStorage.getItem('cityName') === null){
        localStorage.setItem('cityName', 'London');
    }
    const cityName = localStorage.getItem('cityName');
    try {
        const response = await fetch(API_KEY + cityName);    
        let data = await response.json()
        populateData(data)
        return
    }
    catch (error){
        handleErrors(error['message'])
    }
}

async function getWeather(event) {
    event.preventDefault();
    const searchBar = document.getElementById('searchBar');
    const fullUrl = API_KEY + searchBar.value;

    try {
        const response = await fetch(fullUrl);
        const data = await response.json();
        if (data.status === 400) {
            console.log(data);
        }
        populateData(data);
    } catch (error) {
        handleErrors(error['message'])
    } 
    
}

function handleErrors(errorMessage){
    const errorDiv = document.getElementById('error')
    errorMessage === "Cannot read properties of undefined (reading 'name')" 
    ? errorDiv.textContent = 'Please enter a valid city name.'
    : errorMessage === 'Failed to fetch'
    ? errorDiv.textContent = 'Please check your internet connection.'
    : errorDiv.textContent = 'Something went wrong.'
}

const populateData = function(json){
    const location = document.querySelector('#city-name');
    const date = document.getElementById('date');
    const temp = document.getElementById('temp');
    const description = document.getElementById('description');
    const icon = document.getElementById('icon');
    const feelsLike = document.getElementById('feelsLike');
    const wind = document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const uv = document.getElementById('uv');
    const visibility = document.getElementById('visibility');

    location.textContent = json.location.name + ', ' + json.location.country;
    date.textContent = json.current.last_updated;
    temp.textContent = json.current.temp_c + '°C';
    description.textContent = json.current.condition.text;
    icon.src = json.current.condition.icon;
    feelsLike.textContent = json.current.feelslike_c + '°C';
    wind.textContent = json.current.wind_kph + ' kph';
    humidity.textContent = json.current.humidity + '%';
    uv.textContent = json.current.uv;
    visibility.textContent = json.current.vis_km + ' km';
    document.getElementById('error').textContent = '';

    storeCurrentLocation();
    return
}

const countMinutes = function(){
    const dateString = document.getElementById('date').textContent;
    let date = new Date(dateString);
    date.setMinutes(date.getMinutes() + 1);
    document.getElementById('date').textContent = date;
}
const countSeconds = function(){
    const dateString = document.getElementById('date').textContent;
    let date = new Date(dateString);
    date.setSeconds(date.getSeconds() + 1);
    document.getElementById('date').textContent = date;
}

const updateMinutes = function(){
    setInterval(countSeconds, 1000);
    // setInterval(countMinutes, 60000);
}
updateMinutes()


const storeCurrentLocation = function(){
    const cityName = document.getElementById('city-name').textContent;
    localStorage.setItem('cityName', cityName.split(',')[0]);
}

search.addEventListener('click', getWeather);

window.onload = getWeatherOnLoad;

// API response example:
// {
//     "location": {
//         "name": "Sienica Pierce",
//         "region": "",
//         "country": "Poland",
//         "lat": 52.8,
//         "lon": 22.42,
//         "tz_id": "Europe/Warsaw",
//         "localtime_epoch": 1696465175,
//         "localtime": "2023-10-05 2:19"
//     },
//     "current": {
//         "last_updated_epoch": 1696464900,
//         "last_updated": "2023-10-05 02:15",
//         "temp_c": 9.3,
//         "temp_f": 48.7,
//         "is_day": 0,
//         "condition": {
//             "text": "Clear",
//             "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
//             "code": 1000
//         },
//         "wind_mph": 9.4,
//         "wind_kph": 15.1,
//         "wind_degree": 230,
//         "wind_dir": "SW",
//         "pressure_mb": 1021,
//         "pressure_in": 30.15,
//         "precip_mm": 0,
//         "precip_in": 0,
//         "humidity": 85,
//         "cloud": 13,
//         "feelslike_c": 7,
//         "feelslike_f": 44.6,
//         "vis_km": 10,
//         "vis_miles": 6,
//         "uv": 1,
//         "gust_mph": 18.4,
//         "gust_kph": 29.7
//     }
// }