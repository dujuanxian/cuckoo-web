'use strict';

angular.module('app').config(function ($stateProvider) {
  $stateProvider.state('product', {
    url: '/product',
    abstract: true,
    template: '<div ui-view></div>'
  });

  $stateProvider.state('product.list', {
    url: '/list',
    templateUrl: 'controllers/product/list.html',
    controller: 'ProductListCtrl',
    label: '产品列表'
  });
});
