
$("#ticker li").hide();
$("#ticker li:first").show();

function tickOut() {
  $("#ticker li:first").animate({ opacity: 0 }, 1000, function () {
    $(this).hide();
    $(this).appendTo($("#ticker"));
    $("#ticker li:first").hide();
    $("#ticker li:first").fadeIn(1000);
    $("#ticker li:not(:first)").css("opacity", "1");
  });
}

/* delay between ticker fades */
var seconds = 10;

setInterval(function () {
  tickOut();
}, (1000 * seconds));