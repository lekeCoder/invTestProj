
exports.getCurTimeByTimeZone = function (tz) {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*tz));
    return nd.toLocaleTimeString();
    
};
