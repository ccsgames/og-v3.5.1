$("#search-button").on("click", function() {
  var searchValue = $("#search-input").val().toLowerCase();
  $(".game-title").each(function() {
    var gameName = $(this).text().toLowerCase();
    if (gameName.indexOf(searchValue) !== -1) {
      $(this).closest(".game-link").show();
    } else {
      $(this).closest(".game-link").hide();
    }
  });
});
