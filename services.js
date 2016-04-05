//Services
//to be able to give the controllers the same value of city,
//to share the data(information)
weatherApp.service('cityService', function() {
    this.city = 'New York, NY';
})

weatherApp.service('weatherService', ["$resource", function($resource) {
  this.getWeather = function(city, days) {
    var weatherAPI = $resource(
        'http://api.openweathermap.org/data/2.5/forecast/daily'
    );
    return weatherAPI.get({
      q: city,
      cnt: days,
      APPID: "9462c403a0b72dc5148cfe53d8714c9a"
    })
  }
}])
