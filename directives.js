weatherApp.directive("weatherReport", function(){
  return {
    restrict: "E",
    templateUrl: "Directives/weatherReport.html",
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  }
})
