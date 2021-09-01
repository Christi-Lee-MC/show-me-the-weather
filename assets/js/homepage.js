// create api connections here
var getCityWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={cityweather}").then.response.json().then(function(data) {
        displayCityWeather(current.dt, city);
      });
};

// these are variables for the form elements
var cityFormEl = document.querySelector("#city-form");
var cityNameInputEl = document.querySelector("#cityname");

// create event listener for the city search
// executes on form submission browser event
var formSubmitHandler = function(event) {
    event.preventDefault();
//   get value from input element
var cityname = cityNameInputEl.value.trim();

if(cityname) {
    getCityWeather(cityname);
    cityNameInputEl.value = "";
} else{
    alert("Please enter a City Name");
}

// create function to display city weather
var displayCityWeather = function(weather, searchTerm) {
    console.log(weather);
    console.log(searchTerm);

}

var cityWeatherContainerEl = document.querySelector("#weather-container");
var citySearchTerm = document.querySelector("#city-search-term");

};

cityFormEl.addEventListener("submit", formSubmitHandler);