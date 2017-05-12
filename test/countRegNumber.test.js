var countRegNumber= require('../countRegNumber');
const assert = require('assert');

describe('The count registration number function', function(){

    it('should display the splitted reg numbers', function(){
        assert.equal(countRegNumber("CA 182736,CY 523519 ,CJ 812328,CA 182736,CY 523519,CJ 812328,CA 182736"),7);

    });
});
