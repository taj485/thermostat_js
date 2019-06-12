function Thermostat(powersave) {
  this.temperature = 10
  this.powersave = 25
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10) throw("Minimum temperature is 10");
  return this.temperature -= 1;
}

Thermostat.prototype.powersaveOff = function() {
  this.powersave = 35;
}
