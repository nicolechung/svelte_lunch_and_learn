angular.module('CounterApp', [])
  .controller('CounterController', function($scope) {
    $scope.count = 0
    this.increment = function() {
        $scope.count += 1;
    };
 
    this.decrement = function() {
        $scope.count -= 1;
    };
 
    this.reset = function() {
        $scope.count = 0;
    };
  });