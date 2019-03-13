var assert = require('assert');
var chai = require('chai');
var { sumIntervals, overlap, mergeIntervals } = require('../sumIntervals');

describe.only('sumIntervals', function(){
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
    
    context('When input has overlapping intervals', function() {
        it('returns sum without counting the overlap', function(){
          assert.equal(sumIntervals([[1, 4], [3, 5] ]), 4); // 3 + 2
          assert.equal(sumIntervals([[1, 4], [7,10], [3, 5]]), 7); // 3 + 2
          // collect all the real intervals
          // say that the interval is a new one
          
          // or we collect the interval into somethign we know overlaps
            // if the newer interval is higher we moddify the real interval to go to a higher bound
            // if the newer interval is lower we also modify to lower to the lower bound
            
          // a collection of real intervals might be a hash
          

        // 1,4 [1,4] >> 3
        // 1,4 [1,4] [3,4] 
        // 1,5 [1,4] [3,4][3,5]
        // 7,10 [7,10]
        // [1, 4] [7, 10] [3, 5]
        // >>> [1,2,3,4,7,8,9,10,5]
        // [1,2,3,4,7,10,3,4,5]
        // [1,2,3,3,4,4,5,7,8,9,10]
        // >>> [1,2,3,4,5,7,8,9,10]
        // [1,2,3,4,5][7,8,9,10]
        // 5-1=4 10-7=3
        // 7
        
        // [1,4]
        // 1: true
        // 2: true
        // 3: true
        // 4: true
        
        })
        
        
               
    })    
  describe.only('overlap', function(){
    it('should return true because 2 intervals overlap', function(){
      assert.equal(overlap([1,4], [3, 5]), true)
    })
  })
  
  describe.only('mergeIntervals', function(){
    it('should return a merged interval when the intervals overlap', function(){
      assert.equal(overlap([1,4], [3, 5]), true)
    })
  })
    
    
})