describe('thermostat', function() {

  beforeEach(function() {
   thermostat = new Thermostat();
  });

  it("can increase the temperature", function() {
    thermostat.up()
    expect(thermostat.temperature). toEqual(11);
  })

  it("can decrease the temperature", function() {
    thermostat.up()
    thermostat.down()
    expect(thermostat.temperature). toEqual(10);
    console.log(thermostat.temperature, "the temp");
  })

  it("should have a minimum temperature of 10", function() {
    expect(thermostat.temperature). toEqual(10);
  })

  it("will throw an error if temperature descreases below 10", function() {
    expect(function () { thermostat.down() }).toThrow('Minimum temperature is 10');
  })

  it("can turn powersave off", function() {
    thermostat.powersaveOff()
    expect(thermostat.powersave) .toEqual(32)
  })

  it("can turn powersave on", function() {
    thermostat.powersaveOn()
    expect(thermostat.powersave) .toEqual(25)
  })

  it("can reset temperature to 20", function() {
    thermostat.reset();
    expect(thermostat.temperature) .toEqual(20)
  })

  it("can show the current energy is low usage", function () {
    expect(thermostat.showUsage()) . toEqual("low-usage")
  })

  it("can show the current energy is medium-usage", function () {
    thermostat.temperature = 23;
    console.log(thermostat.temperature = 23);
    expect(thermostat.showUsage()) .toEqual("medium-usage")
  })

// < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
});
