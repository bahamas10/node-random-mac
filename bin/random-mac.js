#!/usr/bin/env node
/**
 * Generate a random mac address
 * on the command line
 *
 * Author: Dave Eddy <dave@daveeddy.com>
 */
var randomMac = require('random-mac');
console.log(randomMac(process.argv[2]));
