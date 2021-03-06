
// audio attachment

const tom1 = new Audio ("sounds/tom-1.mp3");
const tom2 = new Audio ("sounds/tom-2.mp3");
const tom3 = new Audio ("sounds/tom-3.mp3");
const tom4 = new Audio ("sounds/tom-4.mp3");
const crash = new Audio ("sounds/crash.mp3");
const kick = new Audio ("sounds/kick-bass.mp3");
const snare = new Audio ("sounds/snare.mp3");


// detecting buttons

for (let i =0; i<document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

makeSound(this.innerHTML);

buttonAnimation(this.innerHTML);
})
};

//detecting keybord press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);
});


//sound function

function makeSound(key){


switch (key) {
  case "w":
    tom1.play();
    break;

  case "a":
      tom2.play();
      break;

  case "s":
      tom3.play();
      break;

  case "d":
      tom4.play();
      break;

  case "j":
      crash.play();
      break;

  case "k":
      kick.play();
      break;

  case "l":
      snare.play();
      break;

  default:
}};


//animation function

function buttonAnimation (currentKey) {

const activeButton = document.querySelector("." +currentKey);
activeButton.classList.add("pressed");

setTimeout (function() {
activeButton.classList.remove("pressed");
}, 100);
};
