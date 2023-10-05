/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./slightlyHidden.js":
/*!***************************!*\
  !*** ./slightlyHidden.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_KEY: () => (/* binding */ API_KEY)
/* harmony export */ });
const API_KEY = 'https://api.weatherapi.com/v1/current.json?key=54f33704159f4202af825233233009&q=';

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slightlyHidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slightlyHidden */ "./slightlyHidden.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const search = document.getElementById('search');

async function getWeatherOnLoad() {
    const response = await fetch(_slightlyHidden__WEBPACK_IMPORTED_MODULE_0__.API_KEY + 'London');    
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
    const fullUrl = _slightlyHidden__WEBPACK_IMPORTED_MODULE_0__.API_KEY + searchBar.value;
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
})();

/******/ })()
;