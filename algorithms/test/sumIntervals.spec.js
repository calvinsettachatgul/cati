var assert = require('assert');
var chai = require('chai');
var sumIntervals = require('../sumIntervals');

describe('sumIntervals', function(){
    context('when input is null', function(){
      it('return zero', function(){
          assert.equal(sumIntervals(null), 0);
      })  
    })
    
    context('when input is []', function(){
      it('return zero', function(){
          assert.equal(sumIntervals([]), 0);
      })  
    })
    context('when input is [[1, 1]]', function(){
      it('return 0', function(){
          assert.equal(sumIntervals([[1, 1]]), 0);
      })  
    })
    
    context('when input has a valid single interval [[1, 2]]', function(){
      it('return the simple sum of the interval 1', function(){
          assert.equal(sumIntervals([[1, 2]]), 1);
      })  
    })
    
    context('when input has a valid single interval [[1, 3]]', function(){
      it('return the simple sum of the interval 2', function(){
          assert.equal(sumIntervals([[1, 3]]), 2);
      })  
    })
    
    context('when input has a two intervals [[1, 2], [3, 4]]', function(){
      it('return the simple sum of the interval 2', function(){
          assert.equal(sumIntervals([[1, 2], [3, 4]]), 2);
      })  
    })
    
    context('when input has a 3 intervals [[1, 2], [3, 4], [5, 6]]', function(){
      it('return the simple sum of the interval 2', function(){
          assert.equal(sumIntervals([[1, 2], [3, 4], [5, 6]]), 3);
      })  
    })
    

    
    
})