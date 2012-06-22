#!/usr/bin/env node
var randomMac = require('../index'),
    assert = require('assert'),
    mac_regex = /^([a-fA-F0-9]{2}:){5}[0-9a-fA-F]{2}$/,
    mac_length = 17,
    mac1 = randomMac(),
    mac2 = randomMac('00:11:22'),
    mac3 = randomMac('wrong');

console.log('Testing correct length');
assert.equal(mac1.length, mac_length);
assert.equal(mac2.length, mac_length);

console.log('Testing correct regex');
assert.ok(mac1.match(mac_regex));
assert.ok(mac2.match(mac_regex));

console.log('Testing incorrect length');
assert.notEqual(mac3.length, mac_length);

console.log('Testing incorrect regex');
assert.equal(mac3.match(mac_regex), null);
