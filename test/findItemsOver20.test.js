
var findItemsOver20 = require('../findItemsOver20');

const assert = require('assert');

describe('The findItemsOver20 function', function(){
  it('should return the list of items over 20', function(){
      assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}],findItemsOver20([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}]));

        });

});
