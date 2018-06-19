let div = document.querySelector('div');
const body = document.querySelector('body');

div.innerHTML = '<p>lorem ipsum sin dolor sit amet</p>';
div.classList.add('text-align');
// div.style.padding = '15px';
div.addEventListener('click', function(e) {
  div.classList.toggle('text-align');
  div.classList.replace('blue-bg', 'green-bg');
});

let newH1 = document.createElement('h1');
newH1.textContent = 'hello i am h1';
newH1.id = 'red_text';
newH1.className = 'text-align';
body.insertBefore(newH1, div);

myImg = document.createElement('img');
myImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/2/23/Madeleines_de_Commercy.jpg');
div.appendChild(myImg);

for(i = 1; i <= 100; i++) {
  var number = document.createElement('p');
  div.appendChild(number);
  if(i % 3 === 0 && i % 5 === 0) {
    number.textContent = 'FizzBuzz';
  } else if (i % 3 === 0) {
    number.textContent = 'Fizz';
  } else if (i % 5 === 0) {
    number.textContent = 'Buzz';
  } else {
    number.textContent = i;
  }
}

// div.addEventListener('click', function(e) {
//   var h2 = document.createElement('h2');
//   div.appendChild(h2);
//   h2.textContent = 'yo wassup';
//   h2.style.color = 'pink';
//   h2.addEventListener('mouseover', function(changeh2) {
//     h2.style.transition = 'all 1s';
//     h2.style.color = 'black';
//     h2.style.fontSize = '2em';
//   })
// })
