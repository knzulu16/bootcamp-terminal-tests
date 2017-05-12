var isFromBellville = require('../isFromBellville');
const assert = require('assert');

describe('The isFromBellville function', function(){

    it('should display  false if its not Bellville registration numbers', function(){
        assert.equal(isFromBellville('JJ 25523'),false);
    });
    it('should display true', function(){
        // this test will fail - can you fix it?
        assert.equal(isFromBellville('CY 10111'),true);
    });
});
