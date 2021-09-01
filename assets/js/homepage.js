// create api connections here
var getCityWeather = function() {
    fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid={af0f0e9374c73e2c02f46aba2b7be010}").then(function(response) {
  console.log("inside", response);
});

console.log("outside");
}
// these are variables for the form elements
var cityFormEl = document.querySelector("#city-form");
var cityNameInputEl = document.querySelector("#cityname");

// create event listener for the city search
// executes on form submission browser event
var formSubmitHandler = function(event) {
    event.preventDefault();
//   get value from input element
var cityname = cityNameInputEl.nodeValue.trim();

if(cityname) {
    getCityWeather(cityname);
    cityNameInputEl.value = "";
} else{
    alert("Please enter a City Name");
}
};

userFormEl.addEventListener("submit", formSubmitHandler);