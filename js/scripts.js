//business logic
const beep = 'beep!'
const boop = 'boop!'
const neighbor = "Won't you be my neighbor?"

var roboText = function(input) {
  let number = [];
  for (let i = 0; i <= input; i++) {
    number.push(i.toString());
  }
  var roboger = number.map(function(number) {
    if (number.includes('3')) {
      return number = neighbor;
    } else if (number.includes('2')) {
      return number = boop;
    } else if (number.includes('1')) {
      return number = beep;
    } else {
      return number;
    };
  });
  console.log(roboger)
  return roboger;
};

//UI logic
$(document).ready(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#input").val());
    var result = roboText(input);
    $("#results").text(result);
    $(".output").show();
    $("img").click(function() {
      $("#results").text(result.reverse());
    });
  });
  
});

