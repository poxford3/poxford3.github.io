$(document).ready(function () {
  $(document).ready(function () {
    $("#projectList").hide();
  });

  $(".visButton").click(function () {
    if ($("#projectList").css("display") === "none") {
      $("#projectList").css("display", "flex");
      $(".skills").fadeIn(100);
      $(".listname").each(function (index) {
        $(this)
          .delay(200 * index)
          .fadeIn(300);
      });
      $(".visButton").html("Less...");
    } else {
      $(".listname").each(function (index) {
        $(this)
          .delay(200 * index)
          .fadeOut(300, function () {
            $(".skills").fadeOut(300, function () {
              $("#projectList").css("display", "none");
              $(".visButton").html("More...");
            });
          });
      });
    }
  });

  $(".listgroup").click(function() {
    console.log($(this).siblings());
    var parentJustify = $(this).css("justify-content") === "center" ? "space-between" : "center"; 
    $(this).css("justify-content", parentJustify);
    $(this).children().toggle();  // needs work here 
    $(this).siblings().toggle();
  })
});
