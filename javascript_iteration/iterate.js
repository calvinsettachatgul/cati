// let is a keyword to define variables
// new es6 syntax

let person1 = {
   "first": "calvin", 
   "last": "sett", 
   "email": "calvin@email.com", 
}
let person2 = {
   "first": "tim", 
   "last": "deel", 
   "email": "tim@example.com", 
}

let person3 = {
    "first": "Bob",
    "last": "Belcher",
    "email": "bob@burgers.com",
}
let people = [person1, person2, person3]

// for(let i=0; i < people.length; i++){
//     let person = people[i];
//     console.log(person.first);
// }

// there is an es6 
// feaure called string templating
// with this feature you can string interpolate
// you do it with `${ varaible}` <- these are not apposterphies they are back ticks
// for instance in ruby " this is the value of variable: #{variable}"
//  for(let i=0; i < people.length; i++){
    //  done with string concat
//  }

let allNames = [];

//  for(let i=0; i < people.length; i++){
//      console.log(`${people[i].first} ${people[i].last}`); 
//  }
 
let pushIntoAllNames = function(name){
    allNames.push(name);
}

 for(let i=0; i < people.length; i++){
     pushIntoAllNames(people[i].first)
 }
 
//  console.log(allNames)
 
 
 
//  create a function that will convert all the people into a string representation 
//  and then use that function to generate an array of those strings

// fat arrow function
// arrow functions

// let myfunction = (arg1, arg2) => {
//   console.log(arg1, arg2); 
// }

// myfunction("hello", "world");


// let myfunctionWrapper = (arg1, callback) => {
//     callback(arg1);
// }

let myfunctionWrapper = function(arg1, callback){
    console.log(callback)
    callback(arg1);
}

// printTwo();

// function expresssion
let printOne = function(){
    console.log(1);
}

//this has hoisting 
function printTwo(){
    console.log(2);
}    

// myfunctionWrapper("calvin", function(name){
//         console.log(name);
//     } )

// myfunctionWrapper("any old thing", printOne)

// myfunctionWrapper("calvin", (name) =>  { console.log(name)} )


 let allPeopleStrings = [];

let peopleToString = function(personObject){
 return `${personObject.first} ${personObject.last} ${personObject.email}`;   
}

for(let i=0; i < people.length; i++){
    allPeopleStrings.push(peopleToString(people[i]));
}


console.log(allPeopleStrings);