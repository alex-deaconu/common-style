'use strict';

angular.module('commonHeader', [
  'ui.bootstrap'
])
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
        link: function(scope, iElement, iAttrs) {
          scope.navCollapsed = true;
          // If nav options not provided use defaults
          if (!scope.navOptions)
            scope.navOptions = [{
              title: 'Home',
              link: '#/'
            }, {
              title: 'Store',
              link: ''
            }, {
              title: 'Account',
              link: ''
            }, {
              title: 'Sellers',
              link: ''
            }, {
              title: 'Platform',
              link: 'http://rva.risevision.com/',
              target: '_blank'
            }];
        }
      };
    }
  ]);