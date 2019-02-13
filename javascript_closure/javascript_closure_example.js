// example of javascript closure

function parent(){
    let closureVariable = 0;
    function childAddOne(){
      console.log('before', {closureVariable});
      console.log(closureVariable); 
      closureVariable++;
      console.log('after', {closureVariable});
    }    
    function childAddTwo(){
      console.log('before', {closureVariable});
      console.log(closureVariable); 
      closureVariable++;
      closureVariable++;
      console.log('after', {closureVariable});
    }
    return {
      childAddOne,
      childAddTwo
    }
};

// let childFunctionAddOneA = parent();
let childFunctions = parent();

childFunctions.childAddOne();
childFunctions.childAddTwo();
// childFunctionAddOneA();
// childFunctionAddOneA();

// let childFunctionAddOneB = parent();

// childFunctionAddOneB()
// childFunctionAddOneB()
