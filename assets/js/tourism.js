
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
        var cityOne = document.querySelector('.city-one')
        var cityOneLabel = document.querySelector('#city-one-label')
        var cityOneImageLabel = response.results[0].name;
        var cityOneImage = response.results[0].images[0].source_url;
        cityOne.setAttribute('src', cityOneImage);
        cityOneLabel.textContent = cityOneImageLabel;


        var cityTwo = document.querySelector('.city-two')
        var cityTwoLabel = document.querySelector('#city-two-label')
        var cityTwoImageLabel = response.results[1].name;
        var cityTwoImage = response.results[1].images[0].source_url;
        cityTwo.setAttribute('src', cityTwoImage);
        cityTwoLabel.textContent = cityTwoImageLabel;


        var cityThree = document.querySelector('.city-three')
        var cityThreeLabel = document.querySelector('#city-three-label')
        var cityThreeImageLabel = response.results[2].name;
        var cityThreeImage = response.results[2].images[0].source_url;
        cityThree.setAttribute('src', cityThreeImage);
        cityThreeLabel.textContent = cityThreeImageLabel;


        var cityFour = document.querySelector('.city-four')
        var cityFourLabel = document.querySelector('#city-four-label')
        var cityFourImageLabel = response.results[3].name;
        var cityFourImage = response.results[3].images[0].source_url;
        cityFour.setAttribute('src', cityFourImage);
        cityFourLabel.textContent = cityFourImageLabel;


        var cityFive = document.querySelector('.city-five')
        var cityFiveLabel = document.querySelector('#city-five-label')
        var cityFiveImageLabel = response.results[4].name;
        var cityFiveImage = response.results[4].images[0].source_url;
        cityFive.setAttribute('src', cityFiveImage);
        cityFiveLabel.textContent = cityFiveImageLabel;


        var citySix = document.querySelector('.city-six')
        var citySixLabel = document.querySelector('#city-six-label')
        var citySixImageLabel = response.results[5].name;
        var citySixImage = response.results[5].images[0].source_url;
        citySix.setAttribute('src', citySixImage);
        citySixLabel.textContent = citySixImageLabel;


        var citySeven = document.querySelector('.city-seven')
        var citySevenLabel = document.querySelector('#city-seven-label')
        var citySevenImageLabel = response.results[6].name;
        var citySevenImage = response.results[6].images[0].source_url;
        citySeven.setAttribute('src', citySevenImage);
        citySevenLabel.textContent = citySevenImageLabel;


        var cityEight = document.querySelector('.city-eight')
        var cityEightLabel = document.querySelector('#city-eight-label')
        var cityEightImageLabel = response.results[7].name;
        var cityEightImage = response.results[7].images[0].source_url;
        cityEight.setAttribute('src', cityEightImage);
        cityEightLabel.textContent = cityEightImageLabel;


        var cityNine = document.querySelector('.city-nine')
        var cityNineLabel = document.querySelector('#city-nine-label')
        var cityNineImageLabel = response.results[8].name;
        var cityNineImage = response.results[8].images[0].source_url;
        cityNine.setAttribute('src', cityNineImage);
        cityNineLabel.textContent = cityNineImageLabel;


        var cityTen = document.querySelector('.city-ten')
        var cityTenLabel = document.querySelector('#city-ten-label')
        var cityTenImageLabel = response.results[9].name;
        var cityTenImage = response.results[9].images[0].source_url;
        cityTen.setAttribute('src', cityTenImage);
        cityTenLabel.textContent = cityTenImageLabel;


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














