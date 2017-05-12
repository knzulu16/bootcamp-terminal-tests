var isWeekDay= require('../isWeekDay');
const assert = require('assert');

describe('The isWeekDay function', function(){

    it('should display true if it is weekDay', function(){
        assert.equal(isWeekDay("Monday"),true);
      });

        it('should display false if it is not weekDay',function(){
           assert.equal(isWeekDay("Sunday"),false);
});
});
