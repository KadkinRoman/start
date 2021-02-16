document.querySelector('html').onclick = function() {
	var myBackground = document.documentElement.style; 
	//не получаю backgrounImage до первого выполнения функции
    if(myBackground.backgroundImage === 'url("images/back2.png")') {
      myBackground.backgroundImage = 'url("images/back.png")';
    } else {
      myBackground.backgroundImage = 'url("images/back2.png")';
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}