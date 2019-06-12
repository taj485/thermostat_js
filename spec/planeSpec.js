describe('plane', function() {
  it("should be flying after you ask it to fly", function() {
    var plane = new Plane
    plane.fly()
    expect(plane.isFlying). toEqual(true);
  })

  it("should land when you ask it to land", function() {
    var plane = new Plane
    plane.fly()
    plane.stopFlying()
    expect(plane.isFlying). toEqual(false);
  })
});