var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5') // preferred to protect code
greet5.greet();
