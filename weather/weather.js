const request = require('request');

var getWeather = (lat, lng , callback)=> {
	request({
		url: `https://api.darksky.net/forecast/936bdf9a5c37b62adccbdf081fd5c67c/${lat},${lng}`,
		json: true
	}, (error, response, body)=>{
		if(error){
			callback('Unable to connect to DarkSky Server.');
		}else if(body.code === 400){
			callback('The given location (or time) is invalid.');
		}else if(response.statusCode === 200){
			callback(undefined,{
				temperature: body.currently.temperature ,
				apparentTemperature: body.currently.apparentTemperature
			});
		}
	});
};

module.exports.getWeather = getWeather;
