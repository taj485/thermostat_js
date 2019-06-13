function Thermostat() {
  this.temperature = 20
  this.maxTemp = 25
  this.minimumTemp = 10
};

Thermostat.prototype.up = function(number) {
  this.temperature += number;
  if (this.temperature > this.maxTemp) {this.temperature = this.maxTemp};
};

Thermostat.prototype.down = function(number) {
  this.temperature -= number;
  if (this.temperature <= this.minimumTemp) {this.temperature = this.minimumTemp};
}

Thermostat.prototype.powersaveOff = function() {
  this.maxTemp = 32;
}

Thermostat.prototype.powersaveOn = function() {
  this.powersave = 25;
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.showUsage = function() {
  if (this.temperature < 18) {
     return 'low-usage';
  } else if (this.temperature < 25) {
     return 'medium-usage';
  };
}
