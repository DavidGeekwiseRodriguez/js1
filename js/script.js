let emailInput = document.querySelector('#email');
let myPTag = document.querySelector('#data_binding');
let passwordInput = document.forms.login.pass;
let submit = document.forms.login.submitBtn;

emailInput.addEventListener('keyup', function(e) {
  myPTag.textContent = emailInput.value;
});

submit.addEventListener('click', function(e) {
  if (passwordInput.value !== '' || emailInput.value !== '') {
    submit.disabled = false;
  };
});

let user = {
  name: 'Henry',
  password: 1234,
  status: 'inactive'
};

let guest = {
  name: 'Guest',
  password: undefined,
  status: 'active'
};

let newScope = {
  name: 'Peter Piper',
  password: 'bag o peppers',
  instrument: 'Pipes',
  context: logMyName
};

// newScope.context('Fly away');

function logMyName(greeting) {
  console.log(this.name, this);
  alert(`${greeting}, ${this.name}!`);
};

// logMyName.call(user, 'Hello'); // this is known as a call site
// logMyName.call(guest, 'Sign up');

let classScore = 90;
this.classScore = classScore;

{
  let classScore = 75
  console.log(classScore, 'first');
  {
    let classScore = 50
    console.log(this.classScore, 'second');
  }
};

console.log(classScore, 'global');
