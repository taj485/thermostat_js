describe('airport', function() {
  it('can land a plane', function(){
    var airport = new Airport
    var plane = { isFlying: true }
    airport.land(plane)
    expect(airport.hangar).toContain(plane)
  })

  it('cannot land plane that is not flying', function(){
    var airport = new Airport
    var plane = { isFlying: false }
    expect(function () { airport.land(plane) }).toThrow('No!')
  })

  it('plane can takeoff from airport', function() {
    var airport = new Airport
    var plane = { isFlying: true }
    airport.land(plane)
    plane.isFlying = false 
    airport.takeOff(plane)
    expect(airport.hangar).toEqual([])
  })

  it('a plane cannot take off if it has already taken off', function() {
    var airport = new Airport
    var plane = { isFlying: true }
    expect(function () { airport.takeOff(plane) }).toThrow('Plane has already taken off')
  });

  it('a plane cannot land if the airport is full', function() {
    var airport = new Airport
    for(i = 0; i < airport.capacity; i++) {
       eval(`var plane${i} = { isFlying: true }`)
       eval(`airport.land(plane${i})`)
    }
    console.log(airport.hangar)
    var strandedPlane = { isFlying: true }
    expect(function() { airport.land(strandedPlane) }).toThrow('Airport is full')

  })
});