const future1 = document.getElementById('1')
const future1_1 = document.getElementById('1.1')
const future2 = document.getElementById('2')
const future2_2 = document.getElementById('2.1')
const future3 = document.getElementById('3')
const future3_3 = document.getElementById('3.1')


fetch(`http://api.openweathermap.org/data/2.5/forecast/?q=Minsk&cnt=21&appid=c92437d1837e764ceeb7115131fec2a8`)
.then(response =>{
    return response.json()
})
.then( function(data){
    console.log(data);
    const temp1 = data.list[7].main.temp
    const temp2 = data.list[15].main.temp
    const temp3 = data.list[20].main.temp
    const temp1_1 = data.list[7].weather[0].description
    const temp2_2 = data.list[15].weather[0].description
    const temp3_3 = data.list[20].weather[0].description

    future1.textContent = Math.floor(temp1 - 273,15);
    future2.textContent = Math.floor(temp2 - 273,15);
    future3.textContent = Math.floor(temp3 - 273,15);
    future1_1.textContent = temp1_1
    future2_2.textContent = temp2_2
    future3_3.textContent = temp3_3
})
mapboxgl.accessToken = 'pk.eyJ1IjoieW1iaSIsImEiOiJja2FxcWt0MHcwOGJtMnhxZjF4ZG93YWY1In0.yKNzcgV6yPv_XsSmSvPsfQ';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [27.56, 53.9], // starting position [lng, lat]
zoom: 10 // starting zoom
});