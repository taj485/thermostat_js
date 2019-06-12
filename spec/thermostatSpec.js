describe('thermostat', function() {
  it("can increase the temperature", function() {
    var thermostat = new Thermostat
    thermostat.up()
    expect(thermostat.temperature). toEqual(11);
    console.log(thermostat.temperature, "the temp");
  })

  // it("should land when you ask it to land", function() {
  //   var plane = new Plane
  //   plane.fly()
  //   plane.stopFlying()
  //   expect(plane.isFlying). toEqual(false);
  // })
});