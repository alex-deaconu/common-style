'use strict';

angular.module('commonHeader', [])
  .directive('commonHeader', [

    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/common-header/common-header.html',
        scope: true,
        link: function(scope, iElement, iAttrs) {
          scope.authStatus = scope.$eval(iAttrs.authStatus);
          scope.isPurchaser = scope.$eval(iAttrs.isPurchaser);
          scope.companyLoaded = scope.$eval(iAttrs.companyLoaded);
          scope.selectedCompanyName = scope.$eval(iAttrs.selectedCompanyName);
          scope.canChangeCompany = scope.$eval(iAttrs.canChangeCompany);

          scope.messages = ['<li class="system-message">Lorem ipsum dolor sit amet</li>', '<li class="system-message">Consectetur adipiscing elit</li>', '<li class="system-message">Suspendisse convallis leo sed</li>'];
          // User
          scope.userProfilePicture = scope.$eval(iAttrs.userProfilePicture);
          scope.userProfileName = scope.$eval(iAttrs.userProfileName);
          scope.userProfileEmail = scope.$eval(iAttrs.userProfileEmail);
        }
      };
    }
  ]);