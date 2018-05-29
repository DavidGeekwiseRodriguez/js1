// var birthday = new Date(`April 4 1999`);
// confirm(`Is ${birthday} your birthday?`); ES6

let name = 'David';
let age = 19;

if(name && age){
  // alert('we livin out here');
  // console.log('we all gucci gang');
} else {
  // alert('one is dead omg');
  // console.log('yo this is wack');
}

// == - loosely equal - only checks the values
// === - strict equal - values HAVE to be equal
// != - NOT loosely equal - checks if not loosely equal
// !== - NOT strictly equal - checks if not strictly equal

let objectOne = {
  name: "David"
};

let objectTwo = {
  name: "David"
};

// alert(objectOne == objectTwo);
// objects will NEVER be equal to each other

var firstString = "tacos";
var objString = new String('tacos');

if (firstString === objString) {
  // console.log('loosely equal');
}

if (firstString == objString) {
  // console.log('strictly equal');
}

let myNumber = 77;
// console.log(!isNaN(myNumber));

// let firstPrompt = parseInt(prompt('gimme a number', '10'));
// let secPrompt = parseInt(prompt('gimme another number', '10'));
// alert(firstPrompt + secPrompt);

// if (firstPrompt > secPrompt) {
//   alert('first is bigger');
// } else if (secPrompt > firstPrompt) {
//   alert('second is bigger');
// } else if (firstPrompt == secPrompt) {
//   alert('they the same');
// } else {
//   alert('wtf did u put in');
// }

// let firstName = prompt('gimme ur first name', 'tom');

switch(firstName) {
  case 'tom':
    alert('yo wassup tom');
    break;
  case 'john':
    alert('eww');
    break;
  case 'jordan':
    alert('more like boredom');
    break;
  default:
    alert('lol u dont have a name');
    break;
}
