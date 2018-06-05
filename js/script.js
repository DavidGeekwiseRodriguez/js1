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

function capitalCase(string) {
  let words = string.split(' ');
  words.forEach(word => {
    let letters = word.split('');
    let capped = letters[0].toUpperCase();
    letters.splice(0, 1, capped);
  });
  return words.join(' ');
};
// the function argument does not have a value until it is called

let newString = capitalCase('peter piper');
// string now has a value of peter piper
// console.log(newString);

// let myCoolFunction = stuff { // 1 argument fat arrow function
//   console.log(stuff);
// };

// function dogAge(year) {
//   return year * 7;
// };

// alert(dogAge(parseInt(prompt('how old is ur dog', 'in human years'))));

function personSupply(age, product) {
  
}

alert(personSupply(parseInt(prompt('how old are you fam'))));
