console.log(10+10);

fetch("https://www.triposo.com/api/20210317/location.json?id=London&account=6OIHILXY&token=cd6hxbcw7b7ujjuv48p0pjiqo5bb2zp3")

.then(function(data) {
  console.log(data);
    console.log(data.json());
    
})
.catch(err => {
	console.error(err);
});

console.log(2*2)