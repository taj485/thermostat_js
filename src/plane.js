function Plane() {
  this.isFlying = false;
};

Plane.prototype.fly = function() {
  this.isFlying = true;
};

Plane.prototype.stopFlying = function() {
  this.isFlying = false;
};