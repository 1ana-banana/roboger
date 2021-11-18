//business logic
function beepboop(number) {

}


//UI logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const number = $("#text").val();
    const roboMessage = beepboop(number);
    $("#result").html(roboMessage);
  });
});