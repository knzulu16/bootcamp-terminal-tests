var countRegNumber= require('../countRegNumber');
const assert = require('assert');

describe('The count registration number function', function(){

    it('should the number of reg number', function(){
        assert.equal(countRegNumber("CA 182736,CY 523519 ,CJ 812328,CA 182736,CY 523519,CJ 812328,CA 182736"),7);

    });
});
