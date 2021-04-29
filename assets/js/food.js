let citySearch = document.querySelector('#search').value
console.log(citySearch)
// this fetch will find points of interest (food) locations by city name. Hard code search option values into radio buttons that will populate from the country fetch search
// fetch('https://www.triposo.com/api/20210317/poi.json?location_id=' + citySearch + '&tag_labels=eatingout&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')

//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         console.log(response);

        // Country search, Food, points of interest images
        // First Food, Points of interest and image

    //     var foodOneName = document.querySelector('#food-one-name')
    //     var foodOneResponseName = response.results[0].name;
    //     foodOneName.textContent = foodOneResponseName;

    //     var foodOneImageTitle = document.querySelector('#food-one-image-title')
    //     var foodOneKnowFor = response.results[0].snippet;
    //     foodOneImageTitle.textContent = foodOneKnowFor;

    //     var foodOneImagePhoto = document.querySelector('.food-one-image')
    //     var foodOneResponsePhoto = response.results[0].images[0].source_url;
    //     foodOneImagePhoto.setAttribute('src', foodOneResponsePhoto)
    // })