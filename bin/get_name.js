#!/usr/bin/env node

// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);

var hacker_name = require('../lib/index.js');

// Retrieve all the first arguments
output = ""
args.forEach(function(item) {
    // Displays the text in the console
    output = output + item + " ";
});

console.log(`Hey ${output}, Your Hacker Name is: ${hacker_name.get_hacker_name(output)}`);