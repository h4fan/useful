/*
use this script to light the html page because dark mode is bad for my eyes.
turn the light on
*/
const allElements = document.querySelectorAll('*');
allElements.forEach(element => {
  element.style.backgroundColor = 'white';
  element.style.color = 'black';
});
