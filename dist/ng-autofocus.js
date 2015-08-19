/**
 * ng-autofocus - v0.0.2 - Mimics the HTML input attribute autofocus but instead
 * focuses the element when the directive is displayed not just on page load
 *
 * @author Jean-Louis Jouannic (https://github.com/jljouannic)
 */
(function(angular) {
  'use strict';

  angular
    .module('ng-autofocus', [])
    .directive('autofocus', ['$timeout', function($timeout) {
      return {
        restrict: 'A',
        link: function($scope, element) {
          $timeout(function() {
            element[0].focus();
          });
        }
      };
    }]);
})(angular);
