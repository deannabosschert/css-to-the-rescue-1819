var audio = new Audio("audio/parovStelar.mp3");
stelarCheckbox = document.getElementById("distortion");

myfunction = function() {
  if (document.getElementById("distortion").checked) {
    audio.play();
  } else {
    audio.pause();
  }
};
