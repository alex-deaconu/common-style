'use strict';

angular.module('styleGuideApp.directives')
  .directive('navbar', [

    function() {
      return {
        restrict: 'E',
        templateUrl: 'partials/navbar.html'
      };
    }
  ])
  .directive('commonHeader', [

    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/common-header.html',
        scope: true,
        link: function(scope, iElement, iAttrs) {
          // Dropdowns
          scope.userDropdown = false;
          scope.helpDropdown = false;
          scope.notificationsDropdown = false;
          scope.appDropdown = false;

          scope.authStatus = scope.$eval(iAttrs.authStatus);
          scope.isPurchaser = scope.$eval(iAttrs.isPurchaser);

          scope.messages = ['<li class="system-message">Lorem ipsum dolor sit amet</li>', '<li class="system-message">Consectetur adipiscing elit</li>', '<li class="system-message">Suspendisse convallis leo sed</li>'];
          // User
          scope.userProfilePicture = scope.$eval(iAttrs.userProfilePicture);
          scope.userProfileName = scope.$eval(iAttrs.userProfileName);
          scope.userProfileEmail = scope.$eval(iAttrs.userProfileEmail);
        }
      };
    }
  ]);