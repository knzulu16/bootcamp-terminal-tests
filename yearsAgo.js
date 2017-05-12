module.exports = function(year){
  const assert = require('assert');

  var today= new Date();
  var currentY=today.getFullYear();
 // console.log(b.getFullYear());
  var calc =currentY-year;
  return calc;
}
