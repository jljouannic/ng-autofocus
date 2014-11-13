/**
 * ng-autofocus - v0.0.1 - Mimics the HTML input attribute autofocus but instead
 * focuses the element when the directive is displayed not just on page load
 *
 * @author Ian Kennington Walter (http://ianvonwalter.com)
 */
(function(angular) {
  'use strict';

  angular
    .module('ng-autofocus', [])
    .directive('autofocus', function() {
      return {
        restrict: 'A',
        link: function($scope, element) {
          element[0].focus();
        }
      };
    });
})(angular);