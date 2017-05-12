
var greet = require('../greet');
const assert = require('assert');

describe('The greet function', function(){

    it('should greet Andre correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Andre correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Andre', greet('Andre'));
    });
});
