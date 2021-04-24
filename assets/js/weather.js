// Current weather API pull with minutely data
fetch("https://api.weatherbit.io/v2.0/current?&city=Salt Lake City&country=US&key=605fec257fb24bfc849577002a714395&include=minutely")

.then(function(data) {
  console.log(data);
    console.log(data.json());
    
})
.catch(err => {
	console.error(err);
});

// 16 Day weather forecast API
fetch("https://api.weatherbit.io/v2.0/forecast/daily?&city=Salt Lake City&country=US&key=605fec257fb24bfc849577002a714395&include=minutely")

.then(function(data) {
  console.log(data);
    console.log(data.json());
    
})
.catch(err => {
	console.error(err);
});

console.log(2*2)



// Sample code to concantenate a fetch. fetch is inside a function

    // current day weather with  current weather server api call
    // searchTerm variable takes the serch field user input
    // var searchTerm = document.querySelector('#city-search')

    // submitBtn.onclick = findWeather;
    // function findWeather(event) {
    // event.preventDefault();


    // fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
    // searchTerm + 
    // '&units=imperial&exclude=hourly,minutely,alerts&appid=0372eaa7cde1ce19de6c28dd0eb2454c')

    // .then(function(response) {
    //     return response.json();   
    // })
    // .then(function(response) {
    //     console.log(response)