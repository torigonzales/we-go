
var submitBtn = document.querySelector('.submit');



// Begin fuction to search for city
submitBtn.onclick = findCity;
function findCity(event) {
    event.preventDefault();
    var citySearch = document.querySelector('#search').value
    console.log(citySearch)

// this fetch searches by country or cities. Searching by country find attribute captical of country - for a map view with wiki articles and images of laction.  Searching by city will list suburbes and list out images
fetch('https://www.triposo.com/api/20210317/location.json?part_of=' + citySearch + '&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')



.then(function(response) {
    return response.json();   
})
.then(function(response) {
    console.log(response);

    // corresponds with the html tourism-criteria radio buttons
    firstRadio = document.querySelector('#one')
    firstRadio.textContent = response.results[0].name;
    

    secondRadio = document.querySelector('#two')
    secondRadio.textContent = response.results[1].name;
    

    thirdRadio = document.querySelector('#three')
    thirdRadio.textContent = response.results[2].name;
    

    forthRadio = document.querySelector('#four')
    forthRadio.textContent = response.results[3].name;

    fifthRadio = document.querySelector('#five')
    fifthRadio.textContent = response.results[4].name;
    

    sixthRadio = document.querySelector('#six')
    sixthRadio.textContent = response.results[5].name;
    

    seventhRadio = document.querySelector('#seven')
    seventhRadio.textContent = response.results[6].name;
    

    eighthRadio = document.querySelector('#eight')
    eighthRadio.textContent = response.results[7].name;

    ninthRadio = document.querySelector('#nine')
    ninthRadio.textContent = response.results[8].name;
    

    tenthRadio = document.querySelector('#ten')
    tenthRadio.textContent = response.results[9].name;

    var alpha = document.querySelector('.test-one')
    var imageOne = response.results[0].images[5].source_url;
    console.log(imageOne);
    alpha.setAttribute('src', imageOne);

    var bravo = document.querySelector('.test-two')
    var imageTwo = response.results[1].images[5].source_url;
    console.log(imageTwo);
    bravo.setAttribute('src', imageTwo);

})


// .catch(err => {
// 	console.error(err);
// });



// this fetch will find points of interest (food) locations by city name. Hard code search option values into radio buttons that will populate from the country fetch search
fetch('https://www.triposo.com/api/20210317/poi.json?location_id=' + citySearch + '&tag_labels=eatingout&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')

.then(function(response) {
    return response.json();   
})
.then(function(response) {
    console.log(response);

})

.catch(err => {
	console.error(err);
});

};














