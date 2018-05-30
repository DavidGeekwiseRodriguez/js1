//TAKE HOME

let askName = prompt('you whats ur name');
let askFavColor = prompt('whats ur fav color', 'red, orange, yellow, green, blue, pink, purple, black, white, gray');

switch(askFavColor) {
  case 'red':
    alert(`eww ${askName} likes red`);
    break;
  case 'orange':
    alert(`${askName}, it aint the new black`);
    break;
  case 'yellow':
    alert(`${askName}'s shining like he's pikachu`);
    break;
  case 'green':
    alert(`ah so ${askName}'s green like shrek`);
    break;
  case 'blue':
    alert(`dont be down ${askName}, be happy`);
    break;
  case 'pink':
    alert(`gotta agree with ${askName}, it's pretty sick`);
    break;
  case 'purple':
    alert(`${askName}'s lookin like grimace`);
    break;
  case 'black':
    alert(`ow don't cut yourself on ${askName}'s edge`);
    break;
  case 'white':
    alert(`${askName} might be an angel`);
    break;
  case 'gray':
    alert(`${askName}, it's just a dark white`);
    break;
  default:
    alert(`don't make me say bad things about you, ${askName}`);
    break;
}
