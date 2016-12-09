var axios = require("axios");

const 
    APIKEY = "78ae74cf1d8adee0e1c089986d343ae7",
    OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${APIKEY}&units=imperial`,

    end_const_def = [] ;


module.exports = {
    
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl)
            .then(this.getSuccess, this.getFailure)
            .catch(console.err);
            // .then(this.getFailure, this.getSuccess);
    }, 


    getSuccess: function (res) {
        // debugger;
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return {
                temp: res.data.main.temp,
                city: res.data.name,
                country: res.data.sys.country
            }
        }
    },


    getFailure: function (res) {
        throw new Error("API cannot retrieve weather information for requested city.");
    }
}