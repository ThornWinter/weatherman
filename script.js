function getWeather(unitType) {
  $.getJSON("http://ipinfo.io/json", function(theData) {
    var zipCode = theData.postal;
  
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&APPID=90b586f6be2bba44e8a9e111eb97064f", function(data) {
    // ENTER CODE BELOW THIS LINE TO KEEP DATA AS A GLOBAL OBJECT
    
    // LOCATION
    document.getElementById('location').innerHTML = data.name + ", " + data.sys.country;
    
    // TEMPERATURE WITH ABILITY TO CHANGE UNIT TYPES
    if (unitType === "C") {
      var temp = Math.floor(data.main.temp - 273.15);
    } else {
      var temp = Math.floor(data.main.temp * 9/5 - 459.67);
    }
    document.getElementById('temp').innerHTML = temp + "&deg; " + unitType;
    
    // DESCRIPTION
    document.getElementById('description').innerHTML = data.weather[0].main;
    
    // ICON
    document.getElementById('icon').src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    
    // ENTER CODE ABOVE THIS LINE TO KEEP DATA AS A GLOBAL OBJECT
  });
  });
}