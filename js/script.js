$(document).ready(function() {
    $('#item2').mouseenter(function() {
    $('#output').text("Wanna see some work?");
  })
    .mouseleave(function() {
    $('#output').text("Giving you what you really want.");
   });

    $('#item3').mouseenter(function() {
    $('#output').text("What we're all about.");
  })
    .mouseleave(function() {
    $('#output').text("Giving you what you really want.");
   console.log("ready");
   });

    $('#item4').mouseenter(function() {
    $('#output').text("What we're really all about.");
  })
    .mouseleave(function() {
    $('#output').text("Giving you what you really want.");
   console.log("ready");
   });

    $('#item5').mouseenter(function() {
    $('#output').text("We're ready to hear from you!");
  })
    .mouseleave(function() {
    $('#output').text("Giving you what you really want.");
   console.log("ready");
   });

});