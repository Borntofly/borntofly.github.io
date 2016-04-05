//Controllers
weatherApp.controller('homeController', [
    '$scope',
    'cityService',
    '$location',
    function($scope, cityService, $location) {

        $scope.city = cityService.city;

        //If the value of city changes on the form,
        //then i want to update the service value -> binding
        //so i need a watcher for this
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        })
        $scope.submit = function () {
          $location.path("/forecast");
        }

    }
]);
weatherApp.controller('forecastController', [
    '$scope',
    'cityService',
    '$routeParams',
    'weatherService',
    function($scope, cityService, $routeParams, weatherService) {

        $scope.city = cityService.city;
        $scope.days = $routeParams.days || '2';
        $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
        $scope.weatherInCelcius = function(kelvinValue) {
            return Math.round(kelvinValue - 273.15);
        }
        $scope.dateReadable = function(date) {
            return new Date(date * 1000);
        }
    }
]);
