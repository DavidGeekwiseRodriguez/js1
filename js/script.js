var firstNamePrompt = prompt("yo, what's your first name?");
var lastNamePrompt = prompt("yo, what's your last name?");

console.log(firstNamePrompt);

var alertLastName = alert(lastNamePrompt);

var promptBirthDate = prompt("yo, what's your birthday?");
var birthDate = new Date(promptBirthDate);
var confirmBirthDate = confirm(birthDate);
var alertBirthDate = alert(birthDate);
