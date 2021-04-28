
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
        
    // Country search, City images
        // First City, Title and image
        var cityOneName = document.querySelector('#city-one-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-one-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-one-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);
        
        // Second City, Title and image
        var cityOneName = document.querySelector('#city-two-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-two-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-two-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // Third City, Title and image
        var cityOneName = document.querySelector('#city-three-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-three-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-thre-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // Forth City, Title and image
        var cityOneName = document.querySelector('#city-four-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-four-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-four-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // Fifth City, Title and image
        var cityOneName = document.querySelector('#city-five-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-five-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-five-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // Sixth City, Title and image
        var cityOneName = document.querySelector('#city-six-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-six-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-six-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // Seventh City, Title and image
        var cityOneName = document.querySelector('#city-seven-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-seven-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-seven-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // Eighth City, Title and image
        var cityOneName = document.querySelector('#city-eight-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-eight-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-eight-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // Nineth City, Title and image
        var cityOneName = document.querySelector('#city-nine-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-nine-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-nine-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);

        // TEnth City, Title and image
        var cityOneName = document.querySelector('#city-ten-name')
        var cityOneResponseName = response.results[0].name;
        cityOneName.textContent = cityOneResponseName;

        var cityOneImageTitle = document.querySelector('#city-ten-image-title')
        var cityOneImageResponseTitle = response.results[0].images[0].caption;
        cityOneImageTitle.textContent = cityOneImageResponseTitle;

        var cityOneImagePhoto = document.querySelector('.city-ten-image')
        var cityOneResponsePhoto = response.results[0].images[0].source_url;
        cityOneImagePhoto.setAttribute('src', cityOneResponsePhoto);


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



    })


    // .catch(err => {
    // 	console.error(err);
    // });



    // this fetch will find points of interest (food) locations by city name. Hard code search option values into radio buttons that will populate from the country fetch search
    // fetch('https://www.triposo.com/api/20210317/poi.json?location_id=' + citySearch + '&tag_labels=eatingout&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')

    // .then(function(response) {
    //     return response.json();   
    // })
    // .then(function(response) {
    //     console.log(response);

    // })

    // .catch(err => {
    //     console.error(err);
    // });

};














