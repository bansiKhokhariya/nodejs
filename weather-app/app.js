const request = require('request')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=db7ef3658dc32cd4c07ce683a6a158aa'


request({url:url,json:true},(error,response)=>{
    console.log('current wind speed ' + response.body.wind.speed);
});

