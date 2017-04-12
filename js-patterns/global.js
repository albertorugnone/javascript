// this is an anti-pattern the global variable should be avoided

var assert = require('assert');
var mocha = require('mocha');

myglobal = 'hello';

// Il test dimostra come una variabile globale venga assegnata alla variabile globale dell'ambiente.
// In questo caso l'ambiente è node e la variabile globale si chiama global
describe('Minimizing globals', function () {
  describe('every javascript envronment', function () {
    it('has a global object accessible when you use this outside of any function', function () {
      assert.equal(myglobal, 'hello');
      assert.equal(global.myglobal, 'hello');
    })
  })
});
