#!/usr/bin/env node
var randomMac = require('../index'),
    test = require('tap').test;

test('Ensure Length', function(t) {
  var mac = randomMac();
  t.equal(mac.length, 17, 'Mac Address is 17 Characters');
  t.end();
});
