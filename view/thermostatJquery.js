$( document ).ready(function() {
  var thermostat = new Thermostat();

  $( ".energyUsage" ).click(function( event ) {
      alert( "Thanks for visiting!" );
  });

  $( ".temperature" ).text(thermostat.temperature);

  $( ".up" ).on('click', function() { // event listener
    thermostat.up(1); // update model
    updateTemperature();
  });

  $( ".down" ).on('click', function() {
    thermostat.down(1);
    updateTemperature();
  })

  $( ".powersave" ).on('click', function() {
    thermostat.powersaveOff();
    $(".powersaveDisplay").text("Powersave is off");
  });

  $( ".reset" ).on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  function updateTemperature() {
    $('.temperature').text(thermostat.temperature);
  };

  // $( ".energyUsage").on('click', function() {
  //   thermostat.energyUsage();
  //
  // })
});
