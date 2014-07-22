'use strict';

angular.module('commonHeader', [])
  .directive('commonHeader', [

    function() {
      return {
        restrict: 'E',
        templateUrl: 'components/common-header/common-header.html',
        scope: {
          authStatus: '=',
          isPurchaser: '=',
          companyLoaded: '=',
          selectedCompanyName: '=',
          canChangeCompany: '=',
          userProfilePicture: '=',
          userProfileName: '=',
          userProfileEmail: '=',
          messages: '='
        },
        link: function(scope, iElement, iAttrs) {}
      };
    }
  ]);