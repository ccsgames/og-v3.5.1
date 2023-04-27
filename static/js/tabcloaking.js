function setTitle() {
  var title = document.getElementById("title-input").value;
  document.getElementById("page-title").innerText = title;
  localStorage.setItem("title", title);
}

function setFavicon() {
  var faviconUrl = document.getElementById("favicon-input").value;
  document.getElementById("favicon").href = faviconUrl;
  localStorage.setItem("faviconUrl", faviconUrl);
}

function reset() {
  document.getElementById("title-input").value = "";
  document.getElementById("page-title").innerText = "Default Title";
  document.getElementById("favicon-input").value = "";
  document.getElementById("favicon").href = "default-favicon.png";
  localStorage.removeItem("title");
  localStorage.removeItem("faviconUrl");
}

// Initialize the title and favicon on page load
var title = localStorage.getItem("title");
if (title) {
  document.getElementById("page-title").innerText = title;
}
var faviconUrl = localStorage.getItem("faviconUrl");
if (faviconUrl) {
  document.getElementById("favicon").href = faviconUrl;
}
