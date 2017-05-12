module.exports = function(weekDay){
  const assert = require('assert');
  var isDay=!weekDay.startsWith('S');
  console.log(isDay);
  return isDay;

}
