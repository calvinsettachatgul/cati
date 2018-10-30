var chai = require("chai");
var assert = chai.assert;

describe('Array', function() {
  // Further code for tests goes here
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
  
  describe('#indexOf',function(){
    context('when the element is not there', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal([1,2,3].indexOf(4), -1);
        })  
    })
    context('when the element is there', function(){
        it('should return the value of the index where element exists', function() {
            assert.equal([1,2,3,4].indexOf(1), 0);
        })
        
    })
  });
  
  describe('#[] getter function', function(){
      it('should return a value at index',function(){
        assert.equal([1,2,3,4][1], 2);
      })
  })
  
}); // end describe Array
