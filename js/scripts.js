//business logic
let wordArray1 = [];
let wordArray2 = [];
let wordArray3= [];
var number = parseInt($('input#text').val());


function beepboop(element) {
  for (let i= 0; i <= number; i++) {
    const element = i.toString();
    if (element.includes(3)) {
      wordArray1.push("Won't you be my neighbor?");
    } else if (element.includes(2)) {
      wordArray1.push('Boop!');
    } else if (element.includes(1)) {
      wordArray1.push("Beep");
    } else {
      wordArray1.push(element);
    }
  }
  return wordArray1;
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