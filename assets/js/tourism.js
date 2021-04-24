
var submitBtn = document.querySelector('.submit');



// Begin fuction to search for city
submitBtn.onclick = findCity;
function findCity(event) {
    event.preventDefault();
    var citySearch = document.querySelector('#search').value
    console.log(citySearch)


    fetch('https://www.triposo.com/api/20210317/location.json?part_of=' + citySearch + '&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3')

.then(function(data) {
  console.log(data);
    console.log(data.json());
    
})
.catch(err => {
	console.error(err);
});






};















// fetch("https://www.triposo.com/api/20210317/location.json?id=London&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3")

// .then(function(data) {
//   console.log(data);
//     console.log(data.json());
    
// })
// .catch(err => {
// 	console.error(err);
// });