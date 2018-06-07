// let products = [['blanket', 12.99, 'the best blanket around'], ['rattle', 4.99, 'it rattles man'], ['diapers', 12.99, 'they catch the doo doo']];
//
// let i = 0;
//
// let newProduct = ["Squeeky Toy", 19.99, "really good toy."];

// products.forEach((product) => {
//   console.log(product);
// });

// for (let i = products.length - 1; i >= 0; i--) {
//   console.log(products[i]);
// };

// FUNCTIONS

// function capitalCase(string) {
//   let words = string.split(' ');
//   words.forEach(word => {
//     let letters = word.split('');
//     let capped = letters[0].toUpperCase();
//     letters.splice(0, 1, capped);
//   });
//   return words.join(' ');
// };
// the function argument does not have a value until it is called

// let newString = capitalCase('peter piper');
// string now has a value of peter piper
// console.log(newString);

// let myCoolFunction = stuff { // 1 argument fat arrow function
//   console.log(stuff);
// };

// function dogAge(year) {
//   return year * 7;
// };

// alert(dogAge(parseInt(prompt('how old is ur dog', 'in human years'))));

// step 1
let todos = [];

let todo1 = [prompt("What do you want to do first?", "Eat")];
let todo2 = [prompt("What do you want to do second?", "Sleep")];
let todo3 = [prompt("What do you want to do third?", "Eat")];

todos.push(todo1, todo2, todo3);

// step 2
// i = 0 - the starting value, i < todos.length - where it ends, i++ - incrementer
for(let i = 0; i < todos.length; i++) {
  let timeline = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2");
  timeline = !isNaN(parseInt(timeline)) ? parseInt(timeline) : 2;
  todos[i].unshift(timeline);
}

todos.sort();

// step 3
let longest = todos[0];
let j = 0;
while(j < todos.length) {
  if(todos[j][0] > longest[0]) longest = todos[j];
  // longest = todos[j][0] > longest[0] ? longest = todos[j] : longest = longest; // ternary version
  j++;
}

longest.push("these are not the droids you're looking for");

// step 4
let z = 0;
do {
  if(todos[z][todos[z].length - 1] !== "this") {
    todos[z].push("done");
  }
  z++;
} while(z < todos.length);
