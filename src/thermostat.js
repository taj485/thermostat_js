function Thermostat() {
  this.temperature = 10
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) throw("Minimum temperature is 10");
  return this.temperature -= 1;
}
