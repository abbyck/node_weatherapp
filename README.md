# Node WeatherApp
***
 A command line node utility to check weather based on location as argument

* Type in location details in command line as parameters 
* Uses Google Maps API to fetch the Lattitude and Longitude of the given location
* As google maps API has intelligent Location Finder just few key words about the location is enough

---

### Getting Strted
 * First clone this repo
```shell
git clone https://github.com/abbrck/node_weatherapp.git
```
* You need to install NodeJs v6 or above
More informations on how to install NodeJs on you machine can be found [here]: https://nodejs.org

* Open Command line / Terminal and type in the following
```shell
node app.js -h
```
This will produce the following output indicating how to use this utility
```
Options:
  -a, --address  Address to fetch weather for                [string] [required]
  --help, -h     Show help                                             [boolean]

```
To check Weather of some city or location simply add '-a [address/location]' as an extra parameter as follows
```shell
node app.js -a "Kannur , Kerala "
```
This utility will output the temperature as follows 
```
The fetched location is : Kannur, Kerala, India

The temperature is : 84.82

The Apparent temperature is : 90.82

```

