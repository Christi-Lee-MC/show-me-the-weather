// create api connections here 
var getCityWeather = function(cityname) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=af0f0e9374c73e2c02f46aba2b7be010").then(function(response)
    {
        return response.json()
    }).then(function(data) {
       displayCityWeather(data);
    }
      
      );
      
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
};

// create function to display city weather
var displayCityWeather = function(weather) {
    console.log(weather);
    

};

var cityWeatherContainerEl = document.querySelector("#weather-container");
var citySearchTerm = document.querySelector("#city-search-term");



cityFormEl.addEventListener("submit", formSubmitHandler);