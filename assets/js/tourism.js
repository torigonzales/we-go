
var submitBtn = document.querySelector('.submit');



// Begin fuction to search for city
submitBtn.onclick = findCity;
function findCity(event) {
    event.preventDefault();
    var citySearch = document.querySelector('#search').value
    console.log(citySearch)

// this fetch searches by country or cities. Searching by country find attribute captical of country - for a map view with wiki articles and images of laction.  Searching by city will list suburbes and list out images
fetch('https://www.triposo.com/api/20210317/location.json?part_of=' + citySearch + '&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')

.then(function(data) {
  console.log(data);
    console.log(data.json());
    
})
.catch(err => {
	console.error(err);
});



// this fetch will find points of interest (food) locations by city name. Hard code search option values into radio buttons that will populate from the country fetch search
fetch('https://www.triposo.com/api/20210317/poi.json?location_id=' + citySearch + '&tag_labels=eatingout&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')

.then(function(data) {
  console.log(data);
    console.log(data.json());
    
})
.catch(err => {
	console.error(err);
});

};














