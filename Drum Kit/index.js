var numButtons = document.querySelectorAll(".drum").length;

for(var x =0;x<numButtons;x++){
  document.querySelectorAll(".drum")[x].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    //
    playSound(buttonInnerHTML);
    btnAnimation(buttonInnerHTML);

  });
}

document.addEventListener("keypress", function(event){
  console.log(event.keyt);
  playSound(event.key);
  btnAnimation(event.key);
});

function playSound(sound){
  switch (sound){
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;
    default:
  }
}

function btnAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
