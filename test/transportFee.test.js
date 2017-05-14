
// module.exports = function(countAllFromTown){
var transportFee = require('../transportFee');

const assert = require('assert');

describe('The transportFee function', function(){

  it('should return the mount of morning shift', function(){
      assert.equal('R20',transportFee("morning"));
    });
    it('should return the mount of afternoon shift', function(){
        assert.equal('R10',transportFee("afternoon"));
      });
      it('should return the mount of night shift', function(){
          assert.equal('free',transportFee("night"));
        });
});
