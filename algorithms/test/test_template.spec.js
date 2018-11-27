let mocha = require('mocha');
let assert = require('assert');
let chai = require('chai').expect

let new_function = require('../module_example');

describe('#sample_method', function () {
  context('first case', function () {
    it('should work verify something', function () {
        console.log(new_function, '<<< new_function')
      new_function();
      assert.equal(1, 1);
    });
  });
});