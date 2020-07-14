const API_KEY = '393da0319e1f7bde0289c5e0bae21f89';
const COORDS = 'coords';
const wheater = document.querySelector('.js-weather');

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response){
       return response.json()
    }).then(function(json){
        const tamparature = json.main.temp;
        const location = json.name;
        wheater.innerText = `${tamparature} @ ${name}`;
    });
}
function handleGeoSucess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(coordsObj);
}
function handleGeoError(){
    console.log('Cant access geo location.')
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess,handleGeoError);
}

function init(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords == null){
        askCoords();
    }
    else{
        const parsed = JSON.parse(loadedCoords);
        getWeather(parsed.latitude, parsed.longitude);
    }
}

init();