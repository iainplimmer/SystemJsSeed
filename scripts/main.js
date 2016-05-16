var q = require('jq');
var greetings = require("./greetings.js");
var events = require("./events.js");

q("div").css('background','#ff0000');
q("div").css('color','#ffffff');
q("div").text(greetings.sayHelloInSpanish() + ': I think you will find this works!');

events.BindEm();