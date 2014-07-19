'use strict';

angular.module('styleGuideApp.controllers', []);
angular.module('styleGuideApp.directives', []);

angular.module('styleGuideApp', [
  'ngRoute',
  'ngSanitize',
  'styleGuideApp.controllers',
  'styleGuideApp.directives'
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