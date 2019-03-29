const weather = require('./weather');
const getTime = require('./gettime');

const locArr = [
    {loc:'San Francisco, CA', zip:'90001'},
    {loc:'San Francisco, Columbia',zip:'90001'},
    {loc:'Lagos, Nigeria',zip:'2040322'},
    {loc:'Lagos, Portugal',zip:'90001'}
];
async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
}
const start = async () => {
    await asyncForEach(locArr, async item => {
    //console.log(item.loc);
        if(item.loc){
            await weather.fetchTimeWeatherByLoc(item.loc);
        }
    });
}

start();
