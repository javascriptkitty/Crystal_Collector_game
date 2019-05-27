var losses, wins;

function initGame() {
  var yourNum = 0;
  $("#current").text(yourNum);

  $("#wins").text(wins);

  $("#losses").text(losses);
  //debugger;

  for (var i = 19; i < 120; i++) {
    var random = Math.floor(Math.random() * 102) + 19;
    $("#match").text(random);
  }

  $(".crystal").each(function() {
    for (var i = 1; i < 12; i++) {
      var value = Math.floor(Math.random() * 10) + 1;
      $(this).val(value);
    }
  });
}

$(document).ready(function() {
  initGame();
  wins = 0;
  losses = 0;
  $(".crystal").on("click", function() {
    var addNum = parseInt($(this).val());
    var current = parseInt($("#current").text());
    $("#current").text(addNum + current);

    var num1 = parseInt($("#match").text());
    var num2 = parseInt($("#current").text());
    if (num1 == num2) {
      alert(" YOU WIN!");
      wins++;
      $("#wins").text(wins);
      initGame();
    }

    if (num1 < num2) {
      alert(" YOU LOST!");
      losses++;
      $("#losses").text(losses);
      initGame();
    }
  });
});
