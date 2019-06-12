function Airport() {
  this.hangar = []
  this.capacity = 5
}

Airport.prototype.land = function(plane) {
  if (this.hangar.length >= this.capacity) throw('Airport is full')
  else if (plane.isFlying === true)
    this.hangar.push(plane)
  else
    throw('No!')
}

Airport.prototype.takeOff = function(plane) {
  if (plane.isFlying) throw('Plane has already taken off')
  var result = this.hangar.filter(function(hangarPlane) { 
    if (plane === hangarPlane)
      return false
    else 
      return true
  })
  this.hangar = result
};
