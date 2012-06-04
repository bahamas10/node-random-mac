module.exports = function(prefix) {
  var mac = prefix || '54:52:00';

  for (var i = 0; i < 6; i++) {
    if (i%2 === 0) mac += ':';
    mac += Math.floor(Math.random()*16).toString(16);
  }

  return mac;
};
