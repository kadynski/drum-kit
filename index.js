
// audio variables

const tom1 = new Audio ("sounds/tom-1.mp3");
const tom2 = new Audio ("sounds/tom-2.mp3");
const tom3 = new Audio ("sounds/tom-3.mp3");
const tom4 = new Audio ("sounds/tom-4.mp3");
const tom1 = new Audio ("sounds/tom-1.mp3");
const tom2 = new Audio ("sounds/tom-2.mp3");
const tom2 = new Audio ("sounds/tom-2.mp3");

for (let i =0; i<document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

function handleClick(){

  let = buttonInnerHTML = this.innerHTML;

switch (buttonInnerHTML) {
  case "w":
    tom1.play ();
    break;
  default:
}
}
 }
