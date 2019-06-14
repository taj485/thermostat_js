$( document ).ready(function() {
  var thermostat = new Thermostat()
  screenUpdate();
  displayPowerUsage();


  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })

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
