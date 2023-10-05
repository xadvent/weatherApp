import { API_KEY } from '../slightlyHidden';

import './style.css'

const search = document.getElementById('search');

async function getWeatherOnLoad() {
    const response = await fetch(API_KEY + 'London');    
    response.json()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
}
async function getWeather() {
    const searchBar = document.getElementById('searchBar');
    const fullUrl = API_KEY + searchBar.value;
    const response = await fetch(fullUrl);    
    response.json()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
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