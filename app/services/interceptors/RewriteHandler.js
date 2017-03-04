'use strict';
angular.module('app').provider('RewriteHandler', function () {
  var baseUrl = '/api';
  this.setBaseUrl = function (value) {
    baseUrl = value.replace(/\/$/, '');
  };

  var pattern = /^\/api/;
  this.setPattern = function (value) {
    pattern = value;
  };

  this.$get = function ($q) {
    var RewriteHandler = {};
    RewriteHandler.request = function (config) {
      if (config.url.match(pattern)) {
        config.url = config.url.replace(pattern, baseUrl);
      }
      return $q.when(config);
    };

    return RewriteHandler;
  };
});
