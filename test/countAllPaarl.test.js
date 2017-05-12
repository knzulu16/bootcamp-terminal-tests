var countAllPaarl= require('../countAllPaarl');
const assert = require('assert');

describe('The count All Paarl reg number function', function(){

    it('should display All Paarl reg numbers', function(){
        assert.equal(countAllPaarl("CJ 182736"),1);

    });
});
