// So when "F" is pressed, game iframe will be fullscreen
document.addEventListener("keydown", function(event) {
  if (event.code === "KeyF") {
    fullscreen();
  }
});
// The function that does the fullscreen for the game iframe
function fullscreen() {
  var iframe = document.getElementById("game");
  if (iframe.requestFullscreen) {
    iframe.requestFullscreen();
  } else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  } else if (iframe.mozRequestFullScreen) {
    iframe.mozRequestFullScreen();
  } else if (iframe.msRequestFullscreen) {
    iframe.msRequestFullscreen();
  }
}
