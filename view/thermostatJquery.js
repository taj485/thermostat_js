$( document ).ready(function() {
  var thermostat = new Thermostat()
  screenUpdate();
  displayPowerUsage();

  $( ".temperature" ).text(thermostat.temperature);

  $( ".up" ).on('click', function() { // event listener
    thermostat.up(1); // update model
    screenUpdate();
  });

  $( ".down" ).on('click', function() {
    thermostat.down(1);
    screenUpdate();
  })

  $( ".powersave" ).on('click', function() {
    thermostat.powersave();
    $(".powersaveDisplay").text("powersave set to: " + thermostat.maxTemp);
  })

  $( ".reset" ).on('click', function() {
    thermostat.reset();
    screenUpdate();
  });

  function screenUpdate() {
    updateTemperature();
    displayPowerUsage();
  };

  function displayPowerUsage() {
    if(thermostat.showUsage() === 'low-usage') {
      $('.power-usage').text('Energy Usage: ' + thermostat.showUsage())
      $('.power-usage').css('color', 'green')
    } else if(thermostat.showUsage() === 'high-usage') {
      $('.power-usage').text('Energy Usage: ' + thermostat.showUsage())
      $('.power-usage').css('color', 'red')
    } else {
      $('.power-usage').text('Energy Usage: ' + thermostat.showUsage())
      $('.power-usage').css('color', 'black')
    }
  };

  function updateTemperature() {
    $('.temperature').text(thermostat.temperature);
  };

});
