
var regCheck = require('../regCheck');
const assert = require('assert');

describe('The registration check function', function(){

    it('should display true if it is the needed reg number', function(){
        assert.equal(regCheck('1234788 GP','GP'),true);
    });
    it('should display reg number for a specific location', function(){
        // this test will fail - can you fix it?
        assert.equal(regCheck('CY189-012','ND'),false);
    });
});
