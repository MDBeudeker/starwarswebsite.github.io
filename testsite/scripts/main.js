var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sith.png'){
        myImage.setAttribute ('src','images/jedi.png')
    } else {
        myImage.setAttribute ('src','images/sith.png')
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Good day Sith Lord. What is your name?');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Do not believe the lies that the Jedi tell you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Do not believe the lies that the jedi have told you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}