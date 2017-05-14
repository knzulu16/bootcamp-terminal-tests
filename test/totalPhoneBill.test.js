
var totalPhoneBill = require('../totalPhoneBill');

const assert = require('assert');

describe('The totalPhoneBill function', function(){
  it('should return cost according to the calls', function(){
      assert.equal('R2.75',totalPhoneBill("call,call"));
    });
    it('should return the cost according to the sms', function(){
        assert.equal('R0.65',totalPhoneBill("sms,sms,sms"));
      });
      it('should return the amount of calls and sms', function(){
          assert.equal('R7.45',totalPhoneBill('call, sms, call, sms, sms'));
        });

});
