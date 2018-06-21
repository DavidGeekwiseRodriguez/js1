let object1 = {};

let object2 = new Object()

let person = {
  firstName: 'david',
  lastName: 'rodriguez',
  age: 19,
  favorites: ['cookies', 'pizza'],
  desc: {
    hairColor: 'black'
  }
};

object1.food = 'pizza';
// you can add to an object using dot notation
object1['color'] = 'pink';
// you can also add to an object using bracket notation
// console.log(object1);

// console.log(person['firstName']);

for (let key in person) {
  // console.log('key', key);
  // console.log(person[key]);
}
// for in lets you see the values of the object

for (let [key, values] of Object.entries(person)) {
  // console.log(key, values);
}
// for of allows you to specify how to view the object
// Object.keys gives you the keys of the object
// Object.values gives you the values of the object
// Object.entries will give you both the keys and values, but in an array - unless written as above

let newObj = Object.create(object1);
// Object.create will clone the old object with a new one
newObj.flower = 'rose';
newObj.color = 'yellow';

// console.log('newObj', newObj);
// console.log('object1', object1);

let recipe = {
  flour: '20 oz',
  eggs: 3,
  vanilla: true,
  rum: 'hella'
}

// console.log(recipe);
let clone = Object.create(recipe)
// console.log(Object.getPrototypeOf(clone), 'prototype');

let vehicle = {
  wheels: 4,
  windows: null,
  engineSize: '4 cylinder',
  door: 4
}

let motorcycle = Object.create(vehicle);
motorcycle.wheels= 2;
// console.log(motorcycle);


let newString = new String();
// console.log(newString);

let newArray = new Array();
// console.log(newArray);

let newObject = new Object();
// console.log(newObject);

let newBool = new Boolean();
// console.log(newBool);

let newNum = new Number();
// console.log(newNum);

function Spaceship(rockets, fluxCapacitor, pilot, blasters, shield, landingGear) {
  this.rockets = rockets;
  this.fluxCapacity = fluxCapacitor;
  this.pilot = pilot;
  this.blasters = blasters;
  this.shield = shield;
  this.landingGear = landingGear;
}

let firefly = new Spaceship(4, false, 'me', Infinity, false, 'broken');
// console.log(firefly);
