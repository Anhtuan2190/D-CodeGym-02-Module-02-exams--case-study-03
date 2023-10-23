let localSt = localStorage.getItem("title");
let newsAPI = "Updating...";

$(document).ready(function () {
  $.ajax({
    url: "https://65365bbbbb226bb85dd1fa03.mockapi.io/api/v1/news",
    type: "GET",
    datatype: "text",
  }).done(function (response) {
    $("#title-content").html(response);
  });
});
