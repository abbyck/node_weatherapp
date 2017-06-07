const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');


const argv = yargs
	.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
})
.help()
.alias('help','h')
.argv;

geocode.geoCodeAddress(argv.address, (errorMessage, results) => {
	if(errorMessage){
		console.log(errorMessage);
	}else{
		weather.getWeather(results.lat,results.lng, (errMsg, temper) =>{
			if(errMsg){
				console.log(errMsg);
			}else{
				console.log(`The fetched location is : ${results.address} \n
The temperature is : ${temper.temperature} \n
The Apparent temperature is : ${temper.apparentTemperature} 
					`);
			}
		})
	}
});
