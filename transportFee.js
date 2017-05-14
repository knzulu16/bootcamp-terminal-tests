module.exports = function(shift){
const assert = require('assert');

  if(shift == 'morning'){
    return 'R20';
  }
  else if(shift == 'afternoon'){
    return 'R10';
  }
 else if(shift == 'night'){
   return 'free';
 }
};
