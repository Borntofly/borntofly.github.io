//Controllers
weatherApp.controller('homeController', [
    '$scope',
    'cityService',
    function($scope, cityService) {

        $scope.city = cityService.city;

        //If the value of city changes on the form,
        //then i want to update the service value -> binding
        //so i need a watcher for this
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        })

    }
]);
weatherApp.controller('forecastController', [
    '$scope',
    'cityService',
    '$resource',
    '$routeParams',
    function($scope, cityService, $resource, $routeParams) {

        $scope.city = cityService.city;
        $scope.days = $routeParams.days || '2';
        $scope.weatherAPI = $resource(
            'http://api.openweathermap.org/data/2.5/forecast/daily'
        );
        $scope.weatherResult = $scope.weatherAPI.get({
            q: $scope.city,
            cnt: $scope.days,
            APPID: "9462c403a0b72dc5148cfe53d8714c9a"
        })
        $scope.weatherInCelcius = function(kelvinValue) {
            return Math.round(kelvinValue - 273.15);
        }
        $scope.dateReadable = function(date) {
            return new Date(date * 1000);
        }
    }
]);
