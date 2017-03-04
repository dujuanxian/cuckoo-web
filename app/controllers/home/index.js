'use strict';

angular.module('app').controller('HomeIndexCtrl', function HomeIndexCtrl($scope) {
  var vm = $scope.vm = {};
  vm.name = 'world';
  console.log(vm.name);
  vm.clear = function() {
    vm.name = '';
  };
});
