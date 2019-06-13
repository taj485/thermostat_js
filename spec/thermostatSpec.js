describe('Thermostat', function() {
    var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("can increase the temperature", function() {
    thermostat.up(1)
    expect(thermostat.temperature).toEqual(21);
  })

  it("can decrease the temperature", function() {
    thermostat.down(1)
    expect(thermostat.temperature).toEqual(19);
  })

  it("should have a minimum temperature of 10", function() {
    thermostat.down(15)
    expect(thermostat.temperature).toEqual(10);
  })

  it("can turn powersave off", function() {
    thermostat.powersaveOff()
    expect(thermostat.maxTemp).toEqual(32)
  })

  it("can only go to max temp set by powersave turned on", function() {
    thermostat.up(15)
    expect(thermostat.temperature).toEqual(25);
  })

  it("can only go to max temp set by powersave turned off", function() {
    thermostat.powersaveOff()
    thermostat.up(15)
    expect(thermostat.temperature).toEqual(32);
  })


  it("can reset temperature to 20", function() {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20)
  })

  it("can show the current energy is low usage", function () {
    thermostat.down(5);
    expect(thermostat.showUsage()).toEqual("low-usage")
  })

  it("can show the current energy is medium-usage", function () {
    thermostat.up(1);
    expect(thermostat.showUsage()).toEqual("medium-usage")
  })
});
