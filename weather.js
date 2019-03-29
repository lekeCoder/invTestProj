const weatherJs = require('weather-js');
const getTime = require('./gettime');

module.exports = weather = {
    fetchTimeWeatherByLoc : (loc) => {
        weatherJs.find({search: loc, degreeType: 'C'}, function(err, result) {
            if(err) {
                console.log(err);
                return;
            }
            try {
                result.forEach(element => {
                    if(element.location.name == loc){
                        var ct = getTime.getCurTimeByTimeZone(element.location.timezone);
                        console.log(element.location.name+"\tTemperature: "+element.current.temperature+"oC\tCurrent Time: "+ct);
                        return;
                    }
                });
            } catch (error) {
                console.log(error);
            }
            
            
        });
    }
}