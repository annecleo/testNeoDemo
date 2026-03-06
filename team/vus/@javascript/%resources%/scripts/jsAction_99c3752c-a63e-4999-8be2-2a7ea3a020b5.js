//var date = Date.now() * 100000
//logger.debug("Date Today="+date);


var unixMillis = Date.now();
var dotNetTicks = unixMillis * 10000 + 621355968000000000;
dotNetTicks;

logger.debug("Date Today="+dotNetTicks);