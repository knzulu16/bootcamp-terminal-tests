
var findItemsOver= require('../findItemsOver');

const assert = require('assert');

describe('The findItemsOver function', function(){
  it('should return the list of items over ', function(){
      assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}],findItemsOver([{name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}],20));

        });

});
