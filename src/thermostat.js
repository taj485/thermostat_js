function Thermostat() {
  this.temperature = 10
};

Thermostat.prototype.up = function() {
  var num = this.temperature;
  return this.temperature = num + 1;
};