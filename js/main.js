$(document).ready(function () {
  var bulbArea = $('#b');

  bulbArea.click(function() {
    bulbArea.toggleClass("off");
    // console.log(bulbArea.text().trim())
    if (bulbArea.text().trim() == "I'm off. Click to turn me on") {
      bulbArea.text("I'm on now! Pls click to turn me off");
    } else {
      bulbArea.text("I'm off. Click to turn me on"); 
    }
  });
})