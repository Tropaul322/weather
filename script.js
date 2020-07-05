const temperatureInfo = document.querySelector('.temp')
const zoneName = document.querySelector('.location_zone')
const temperatureDescr = document.querySelector('.temperature_descr')
const weatherIcon = document.querySelector('.icon')
const today = document.getElementById('today')
const tomorrow = document.getElementById('tomorrow')
const tomorrow1 = document.getElementById('tomorrow1')
const tomorrow2 = document.getElementById('tomorrow2')

let day1 = new Date();
let day2 = new Date(day1);
let day3 = new Date(day2);
day2.setDate(day1.getDate()+1);
day3.setDate(day2.getDate()+1);

let week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
let month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]
console.log(week[day1.getDay()-1],day1.getDate(),month[day1.getMonth()], day1.toLocaleTimeString());



window.addEventListener('load', () => {
    today.textContent = week[day1.getDay()-1] + ", " + day1.getDate()+" " +day1.toLocaleTimeString()
    tomorrow.textContent = week[day1.getDay()]
    tomorrow1.textContent = week[day2.getDay()]
    tomorrow2.textContent = week[day3.getDate()]
    
    if(navigator.geolocation){
        fetch('http://api.ipstack.com/134.17.86.113?access_key=a90f8adaffa022779766ccd187b4563b')
            .then(response =>{
                return response.json()
            })
            .then( function(data){
                console.log(data);
                const lat = data.latitude
                const lon = data.latitude;
                const city = data.city

                
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=c92437d1837e764ceeb7115131fec2a8`)
                    .then(response =>{
                        return response.json()
                    })
                    .then( function(data){
                        console.log(data);
                        const {temp} = data.main;
                        const {name} = data;
                        const {description} = data.weather[0];
                        const {country} = data.sys
                        const {icon} = data.weather[0]
                        console.log(icon);

                        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`
                        zoneName.textContent = `${name} / ${country}`;
                        temperatureInfo.textContent = Math.floor(temp - 273,15);
                        temperatureDescr.textContent = description;
                    })
                })
       /*  navigator.geolocation.getCurrentPosition(position => {
            l = position.coords.longitude
            a = l
            console.log(l);
        }) */
        
    }

})

