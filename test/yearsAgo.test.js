var yearsAgo= require('../yearsAgo');
const assert = require('assert');

describe('The years ago function', function(){

    it('should display the number of years', function(){
        assert.equal(yearsAgo("2013"),4);

    });
});
