(function(){
  'use strict';
  angular.module('angulator', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.display = '0';
    $scope.addDisplay = function(num){
      num = num.toString();
      if(num === '.' && $scope.display.indexOf('.') > -1){return;}

      if($scope.display === '0' && num !== '.'){
        $scope.display = num;
      }else{
        $scope.display += num;
      }
    };
    $scope.clearDisplay = function(){
      $scope.display = '0';
    };
    $scope.calculate = function(op){
      $scope.operator = op;
      $scope.memory = $scope.display;
      $scope.clearDisplay();
    };
    $scope.answer = function(num){
      var x = $scope.memory*1,
          y = $scope.display*1;
      switch($scope.operator){
        case '+':
          $scope.display = x + y;
          break;
        case '-':
          $scope.display = x - y;
          break;
        case '*':
          $scope.display = x * y;
          break;
        case '/':
          $scope.display = x / y;
      }
      $scope.memory = null;
      $scope.operator = null;
      return $scope.display;
    };
  }]);
})();
