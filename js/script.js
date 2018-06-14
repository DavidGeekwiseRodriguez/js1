// checking if the string is a palindrome
// function isPalindrome(string) {
//   let reversed = string.split('').reverse().join('');
//   return string === reversed ? true : false;
// }

// Old methods
let body = document.getElementsByTagName('body');
// console.log(body[0]);

let classes = document.getElementsByClassName('my-header');
// console.log(classes[0]);

let paragraph = document.getElementById('my-paragraph');
// console.log(paragraph);

// Newer methods
let tag = document.querySelector('p');
// querySelector() can be used to look for a tag name
// console.log(tag);

// let myClass = document.querySelector('.my-header');
// querySelector() can also be used to find a class
// console.log(myClass);

let myId = document.querySelector('#my-paragraph');
// querySelectory() can also find an id
// console.log(myId);

let tags = document.querySelectorAll('body');
// querySelectorAll() will log out an array
// console.log(tags);

// function queryDom(methodName, element) {
//   switch(methodName.toLowerCase()) {
//     case 'getelementsbytagname':
//       document.getElementsByTagName(element);
//       break;
//     case 'queryselector':
//       document.querySelector(`.${element}`);
//       break;
//     default:
//       alert('yo wtf did u put in');
//       break;
//   }
// }

let myClass = document.querySelector('.my-header');

// myClass.addEventListener('click', function(e) {
//   console.log(e);
//   alert('stop clickin me');
// });

let clickBtn = document.querySelector('.btnClick');
let divChange = document.querySelector('.colorChange');
let textChange = document.querySelector('.textColor');

clickBtn.addEventListener('click', function(button) {
  alert('oh look u clicked me');
  clickBtn.innerText = 'im changed';
  clickBtn.style.marginBottom = '10px';
});

divChange.addEventListener('mouseenter', function(div) {
  var createHeader = document.createElement('h2');
  createHeader.textContent = 'hello';
  divChange.append(createHeader);
  divChange.style.transition = 'all .5s';
  divChange.style.border = '1px solid black';
  divChange.style.backgroundColor = 'lightgreen';
});

textChange.addEventListener('mouseleave', function(text) {
  textChange.style.transition = 'all .5s';
  textChange.style.color = 'red';
  textChange.style.fontSize = '3em';
});
