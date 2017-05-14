
// module.exports = function(countAllFromTown){
var fromWhere = require('../fromWhere');

const assert = require('assert');

describe('The fromWhere function', function(){
  it('should return the town for the reg number', function(){
      assert.equal('Bellville',fromWhere("CY"));
    });
    it('should return the town for the reg number', function(){
        assert.equal('Cape Town',fromWhere("CA"));
      });
      it('should return the town for the reg number', function(){
          assert.equal('Paarl',fromWhere("CJ"));
        });
        it('should return the town for the reg number', function(){
            assert.equal('Some other place!',fromWhere("CN"));
          });
});
