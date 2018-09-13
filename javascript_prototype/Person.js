// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

// composition
// inherticance
// OrangeTree was composed of Oranges example

// let make = 'benz';
// let model = 's5';
// let mytype = {
//     make, 
//     model
// }
// let mytype = {
//     make: 'mymake', 
//     model: 'mymodel'
// }
// let anothertype = mytype;
// { make, model } = anothertype;
// console.log(make)
// console.log(model)
// console.log('mytype', mytype)

// module.exports = {
//     Vehicle:Vehicle, 
//     Animal: Animal
// }
// module.exports = {
//     Vehicle, 
//     Animal
// }


function Animal(name, age, color, size){
  this.name = name;
  this.age = age;
  this.color = color;
  this.size = size;
//   this.walk = function(){
//       console.log('animal walked')
//   };
}

let myRacoon = new Animal('spotty', 2, 'grey', 'medium' )

// string templating ` `

// benefits of putting the funciton on the prototype instead of just the constructor function
// memory
// prototypical chain lookup

Animal.prototype.walk = function(){
   console.log(`${this.name} had a nice walk`) 
}

myRacoon.walk();

function Cow(name, age, color, size, tailType){
    Animal.call(this, name, age, color, size);
    this.tailType = tailType;
}


Cow.prototype = Object.create(Animal.prototype);

Cow.prototype.constructor = Cow;
let bessy = new Cow('bessy', 2, "brown", "large", "curly")
// console.log(bessy.name === 'bessy')

// console.log("cow walk");
// bessy.walk();


// some tests
console.log(myRacoon.name == 'spotty')
console.log(myRacoon.age == 2)

function Vehicle(make, model, color, year){
    this.type = {
        make,
        model
    };
    this.color = color;
    this.year = year;
};

Vehicle.prototype.fly = function(){
    console.log("It's flying!");
};




let myCar = new Vehicle('Toyota', 'Camry', 'black', 2016)

// myCar.fly();

function Jet(make, model, color, year, engines){
    Vehicle.call(this, make, model, color, year);
    this.engines = engines;
};

Jet.prototype = Object.create(Vehicle.prototype);
Jet.prototype.constructor = Jet;

let myJet = new Jet('Boeing', '747', 'white', '2010', 4);
console.log("The  jet flys?");
myJet.fly();

console.log(myCar.type.make == 'Toyota');
console.log(myCar.type.model == 'Camry');
console.log(myCar.year == 2016);


