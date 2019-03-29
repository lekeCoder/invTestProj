const weatherJs = require('weather-js');
const getTime = require('./gettime');

module.exports = weather = {
    fetchTimeWeatherByLoc : async (loc) => {
        try {
            await weatherJs.find({search: loc, degreeType: 'C'}, function(err, result) {
                if(err) {
                    console.log(err);
                    return;
                }
                try {
                    //console.log(JSON.stringify(result))
                    for (let element of result) {
                        
                        if(element.location.name == loc){
                            
                            var ct;
                            try {
                                ct = getTime.getCurTimeByTimeZone(element.location.timezone);
                            } catch (error) {
                                console.log(error)
                            }
                            
                            console.log(element.location.name+"\tWeather: "+element.current.skytext+" ("+element.current.temperature+"oC)\tCurrent Time: "+ct);
                            break;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
                
                
            });
        } catch (error) {
            console.log(error);
        }
        
    }
}