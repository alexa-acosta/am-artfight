
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

/* change this depending on amount of ticker items */
var itemCount = 3;

setInterval(function () {
  tickOut();
}, (3000 * itemCount));