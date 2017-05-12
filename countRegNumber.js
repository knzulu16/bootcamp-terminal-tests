module.exports = function(string){
  const assert = require('assert');
  var splittedString=string.split(",");
  console.log(splittedString);
  return splittedString.length;

}
