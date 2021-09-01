// create api connections here

// these are variables for the form elements
var userFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#cityname");

// create event listener for the city search
// executes on form submission browser event
var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};

userFormEl.addEventListener("submit", formSubmitHandler);