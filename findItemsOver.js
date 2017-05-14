module.exports=function(name,threshold){
const assert = require('assert');
    var products=[];
    for(var i=0;i<name.length;i++){
      if(name[i].qty>threshold){

        products.push(name[i]);
      }

    }

    return products;
}
