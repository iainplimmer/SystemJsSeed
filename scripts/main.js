var q = require('jq');
var greetings = require("./greetings.js");

q("div").css('background','#ff0000');
q("div").css('color','#ffffff');
q("div").text(greetings.sayHelloInSpanish() + ' i think you will find this works!');