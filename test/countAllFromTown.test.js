

module.exports = function(regNumber){

const assert = require('assert');

describe('The count All from town function', function(){

  it('should return the length of all reg numbers fromStellies', function(){
      assert.equal(5,countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341,CJ 124,CY 567,CL 345, CF 456, CL 341"));
    });



});
}
