let inside = true;

if (inside) {
  // console.log('i am inside');
} else {
  // console.log('i am not inside');
}

// condition ? expression1 : expression2

let example2 = inside ? 'I am inside' : 'i am not inside';
// console.log(example2);

// let number = 10;

// let num = (number > 20) ? 'number is greater than 20' : 'number is less than 20';
// let num - can assign function to a variable
// (number > 20) ? - condition - if number is greater than 20
// 'number is greater than 20' : - if the condition is true
// 'number is less than 20'; - if the condition is false

// console.log(num);

// let checkEmail = name ? 'i have name' : email ? 'i have email' : 'i have none';

// console.log(checkEmail);

let iAmHungry = true;
let money = 5;

if (iAmHungry === true) {
  if (money > 10) {
    // console.log('i am hungry and i have more than 10');
  } else {
    // console.log('i am hungry and i have less than 10');
  }
} else {
  if (money > 10) {
    // console.log('i am not hungry and i have more than 10');
  } else {
    // console.log('i am not hungry and have less than 10');
  }
}
// console.log(iAmHungry);

let hungryQuestion = iAmHungry ? ( (money > 10) ? 'i am hungry and have more than 10' : 'i am hungry and have less than 10') :
            ( (money > 10) ? 'i am not hungry and i have more than 10' : 'i am not hungry and have less than 10');
// console.log(iAmHungry);

let iAmWearingYellow = false;

let yellowQuestion = iAmWearingYellow ? 'yes, i am wearing yellow' : 'no, im not wearing yellow';
// if iAmWearingYellow is false, it runs the second string
// if iAmWearingYellow was true, it would've ran the first string
// console.log(yellowQuestion);

let number = 23;

let num = (number && iAmWearingYellow) ? 'yes, i am 23 and wearing yellow' : 'i am not 23 and i dont wear yellow';
// console.log(num);

let arr = ['javascript', 100, {}, [], true];
// console.log(arr[0]);

var arrQnA = ['Baby Driver', 99, true, 2017];
// console.log(arrQnA);

// arrQnA.push('sushi');
// .push() will add to the end of the array
// console.log(arrQnA);
// arrQnA.unshift('sushi');
// .unshift() will add to the beginning of the arraya
// console.log(arrQnA);
// arrQnA.pop();
// .pop() will remove the last item in the array
// console.log(arrQnA);
// .shift() will remove the first item in the arraya

// console.log(arrQnA[arrQnA.length - 1]);
// finding how many items are in the array

// arrQnA.splice(2);
// .splice() will get the item index and remove items past that
// console.log(arrQnA);

// arrQnA.splice(2, 0, 'cat');
// .splice() can also insert and replace at the index
// console.log(arrQnA);

// arrQnA.slice();
// .slice() will make a copy of the array
// console.log(arrQnA);

const products = [['blanket', 12.99, 'the best blanket around'], ['rattle', 4.99, 'it rattles man'], ['diapers', 12.99, 'they catch the doo doo']];
// console.log(products);
// console.log(products[0][1]);

let firstArray = ['Baby Driver', 'Baby'];
let secArray = ['Pokemon: The First Movie', 'Ash'];
let thirdArray = ['The Martian', 'Wattney'];
let fourthArray = ['Guardians of the Galaxy', 'Peter'];
let fifthArray = ['Pulp Fiction', 'Vincent'];

var favMovies = [];
favMovies.push(firstArray, secArray, thirdArray, fourthArray, fifthArray);

var movieTitles = [];
movieTitles.push(favMovies[0][0], favMovies[1][0], favMovies[2][0], favMovies[3][0], favMovies[4][0], favMovies[5][0]);

var favAndLeastFav = [];
favAndLeastFav.push(favMovies[0][0], favMovies[3][0]);

alert(favMovies.length);
