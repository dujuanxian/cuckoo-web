'use strict';

angular.module('app').config(function ($stateProvider) {
  $stateProvider.state('default', {
    url: '',
    controller: function ($state) {
      $state.go('home');
    },
    label: '首页'
  });
});
