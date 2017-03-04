'use strict';

angular.module('app').controller('ProductListComponentCtrl', function ($scope, Products) {
  var vm = $scope.vm = {};
  Products.query(function (items) {
    vm.items = items;
  });
});

angular.module('app').directive('productList', function () {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'components/product/list.html',
    controller: 'ProductListComponentCtrl'
  };
});

document.createElement('product-list');
