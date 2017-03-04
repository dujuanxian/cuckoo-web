'use strict';

angular.module('app').factory('Products', function ($resource) {
  return $resource('/api/products/:id', {id: '@id'});
});
