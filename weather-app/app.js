const request = require('request')


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=db7ef3658dc32cd4c07ce683a6a158aa'


request({url:url,json:true},(error,response)=>{
    console.log('current wind speed ' + response.body.wind.speed);
});


const options1 = {
    method: 'GET',
    // url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
        params: {
            street: '34 West 13th Street',
            city: 'New York City',
            state: 'NY',
            postalcode: '10011',
            country: 'USA',
            'accept-language': 'en',
            polygon_threshold: '0.0'
        },

    headers: {
        'X-RapidAPI-Key': '243353ce5cmsh2b2c5b184cc6caep123768jsn0c0990d20555',
        'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
    },
};


const res = fetch('https://forward-reverse-geocoding.p.rapidapi.com/v1/forward?street=34 West 13th Street&city=New York City&stateNY&postalcode=10011&country=USA&accept-language=en&polygon_threshold=0.0',options1)
    .then(res=> res.json())
    .then(data=>{
        const latitude = data[0].lat
        const longitude = data[0].lon
        console.log('latitude : '+latitude,'/ longitude : '+ longitude)
    })


// console.log('res-->',data)



