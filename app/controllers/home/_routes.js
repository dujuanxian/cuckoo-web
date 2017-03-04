'use strict';

angular.module('app').config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl',
    label: '首页'
  });
});
