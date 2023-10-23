let localStTitle = localStorage.getItem("title");
let localStCategory = localStorage.getItem("category");
let newsAPI = "Updating...";

localStorage.setItem("title", "");
localStorage.setItem("category", "");

$(document).ready(function () {
  $("#item1").click(function () {
    $.ajax({
      url: "https://65365bbbbb226bb85dd1fa03.mockapi.io/api/v1/news",
      type: "GET",
      datatype: "text",
    }).done(function (response) {
      $("#title-content").window.location.html(response);
    //   $("div").html(response);
    });
  });
});
