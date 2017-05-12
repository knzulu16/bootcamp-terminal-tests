module.exports = function(regNumber,location){

  const assert = require('assert');
  var isGP=regNumber.endsWith(location);
  console.log(isGP);
  return isGP;

}
