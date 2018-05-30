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
// ! - NOT - checks if NOT what you're looking for

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

if (firstString == objString) {
  // console.log('loosely equal');
  // are loosely equal because the VALUE is the same - 'tacos'
}

if (firstString === objString) {
  // console.log('strictly equal');
} else {
  // console.log('they aint');
  // are not strictly equal because are not EXACTLY the same - different type
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
// } else if (firstPrompt === secPrompt) {
//   alert('they the same');
// } else {
//   alert('wtf did u put in');
// }

// let firstName = prompt('gimme ur first name', 'jack');

// switch(firstName) {
//   case 'tom':
//     alert('yo wassup tom');
//     break;
//   case 'john':
//     alert('eww');
//     break;
//   case 'jordan':
//     alert('more like boredom');
//     break;
//   default:
//     alert('lol u dont have a name');
//     break;
// }

//TRY IT OUT

// let askAge = parseInt(prompt('how old are u'));

// if (askAge >= 18) {
//   alert('you may pass');
//   var yesOrNo = prompt('are you younger than 80');
//   if (yesOrNo == 'yes') {
//     let starWars = prompt('do you like star wars');
//     if (starWars == 'yes') {
//       alert('u are beautiful and welcome');
//     } else {
//       alert('go back to star trek weirdo');
//     }
//   } else if (yesOrNo == 'no') {
//     alert('i bet u like prunes u old fart');
//   }
// } else {
//   alert('you shall not pass');
// }

//TAKE HOME

// let askName = prompt('you whats ur name');
// let askFavColor = prompt('whats ur fav color', 'red, orange, yellow, green, blue, pink, purple, black, white, gray');
//
// switch(askFavColor) {
//   case 'red':
//     alert(`eww ${askName} likes red`);
//     break;
//   case 'orange':
//     alert(`${askName}, it aint the new black`);
//     break;
//   case 'yellow':
//     alert(`${askName}'s shining like he's pikachu`);
//     break;
//   case 'green':
//     alert(`ah so ${askName}'s green like shrek`);
//     break;
//   case 'blue':
//     alert(`dont be down ${askName}, be happy`);
//     break;
//   case 'pink':
//     alert(`gotta agree with ${askName}, it's pretty sick`);
//     break;
//   case 'purple':
//     alert(`${askName}'s lookin like grimace`);
//     break;
//   case 'black':
//     alert(`ow don't cut yourself on ${askName}'s edge`);
//     break;
//   case 'white':
//     alert(`${askName} might be an angel`);
//     break;
//   case 'gray':
//     alert(`${askName}, it's just a dark white`);
//     break;
//   default:
//     alert(`don't make me say bad things about you, ${askName}`);
//     break;
// }
