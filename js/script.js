var classroom = 2;
console.log(classroom);
// var's are hoisted (kept in memory) - are dynamic

let classRoom = 2;
console.log(classRoom);
// let's are not hoisted (not kept in memory) - can be redeclared

const testVar = 2;
console.log(testVar);
// const var's SHOULD be static - no redeclarations and redefining

var name = "David";
let birthday = new Date('4.5.99');
const goals = "I want to be proficient in Javascript";

console.log(name, birthday, goals);

var mathExample = Math.ceil(5.5);
console.log(mathExample);
// Math.ceil rounds up

var mathExampleTwo = Math.floor(5.5);
console.log(mathExampleTwo);
// Math.floor rounds down

var obj = new String("yo whats up ");
console.log(typeof obj);
// new is used for objects
// typeof will check the type

// .alert() pops up a notif
// .confirm() gives the user a yes or no option
// .prompt() allows user interaction

let favMovie = "Baby Driver ";
let favFood = "tacos";

const movieYear = new Date('June 21, 2017');
const foodIngredients = ['meat', ' salsa', ' tortilla'];

window.alert(favFood + ' ' + foodIngredients);
window.confirm(favMovie + movieYear);
