let assert = require('assert');
let chai = require('chai');
let sumArray = require('../sumArray');

// write a function that sums the elements in an array and returns the sum
// input [1,2,3]
// output 6

// input null
// output 0

// input []
// output 0

describe('#sumArray', function(){
    context('when the input is null',function(){
        it('should return 0', function(){
            assert.equal(sumArray(null), 0);
        })
    })
    
    context('when the input is empty array []',function(){
        it('should return 0', function(){
            assert.equal(sumArray([]), 0);
        })
    })
    
    context('returns sum when array has integers', function() {
        it('should sum all integers', function(){
            assert.equal(sumArray([1,2,3]), 6)
        })
    })
    
})

