describe('thermostat', function() {
  it("can increase the temperature", function() {
    var thermostat = new Thermostat
    thermostat.up()
    expect(thermostat.temperature). toEqual(11);
  })

  it("can decrease the temperature", function() {
    var thermostat = new Thermostat
    thermostat.up()
    thermostat.down()
    expect(thermostat.temperature). toEqual(10);
    console.log(thermostat.temperature, "the temp");
  })

  it("should have a minimum temperature of 10", function() {
    var thermostat = new Thermostat
    expect(thermostat.temperature). toEqual(10);
  })

  it("will throw an error if temperature descreases below 10", function() {
    var thermostat = new Thermostat
    expect(function () { thermostat.down() }).toThrow('Minimum temperature is 10');
  })

  // it("should land when you ask it to land", function() {
  //   var plane = new Plane
  //   plane.fly()
  //   plane.stopFlying()
  //   expect(plane.isFlying). toEqual(false);
  // })
});
