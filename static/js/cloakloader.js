<script>
  const favicon = document.getElementById("favicon");

  window.addEventListener("load", function() {
    if (localStorage.getItem("tabTitle")) {
      document.title = localStorage.getItem("tabTitle");
    }
    if (localStorage.getItem("faviconUrl")) {
      favicon.href = localStorage.getItem("faviconUrl");
    }
  });
</script>
