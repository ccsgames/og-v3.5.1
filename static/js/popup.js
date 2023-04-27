const popup = document.getElementById("popup");
const close = document.getElementById("close");

// Check if the user has visited the site before
if (!localStorage.getItem("visited")) {
  popup.style.display = "block";
}

close.addEventListener("click", function() {
  popup.style.display = "none";
  localStorage.setItem("visited", true);
});
