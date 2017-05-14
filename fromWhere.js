module.exports = function(regNumber){
  const assert = require('assert');


  if(regNumber.startsWith('CY')){
  return 'Bellville';
}
  else
    if(regNumber.startsWith('CJ')){
      return 'Paarl';

  }
    else
      if(regNumber.startsWith('CA')){
        return 'Cape Town';

    }
      else{
        return 'Some other place!';
      }
}
    //   fromWhere('CY 7564');
    //
    //
    //
    //   if(shift == 'morning'){
    //     return 'R20';
    //   }
    //   else if(shift == 'afternoon'){
    //     return 'R10';
    //   }
    //   else if(shift == 'night'){
    //     return 'free';
    //   }
    // };
