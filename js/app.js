'use strict';

angular.module('styleGuideApp.controllers', []);
angular.module('styleGuideApp.directives', []);

angular.module('styleGuideApp', [
  'ngRoute',
  'ngSanitize',
  'hljs',
  'ui.bootstrap',
  'styleGuideApp.controllers',
  'styleGuideApp.directives',
  'commonHeader'
])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'ReadeMeCtrl',
          templateUrl: 'partials/read-me.html'
        })
        .when('/commonheader', {
          controller: 'CommonHeaderCtrl',
          templateUrl: 'partials/common-header.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);