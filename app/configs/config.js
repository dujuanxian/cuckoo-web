'use strict';

// 这里只能注入constant和各种Provider。本阶段主要用于通过Provider对各种服务进行配置。
angular.module('app').config(function(RewriteHandlerProvider, $httpProvider) {
  $httpProvider.interceptors.push('RewriteHandler');
  $httpProvider.interceptors.push('AuthHandler');
  $httpProvider.interceptors.push('ErrorHandler');
  $httpProvider.interceptors.push('LoadingHandler');
});
