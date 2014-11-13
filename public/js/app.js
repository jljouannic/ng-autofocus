/**
 * Example application for ng-autocomplete
 * https://github.com/ianwalter/ng-autocomplete
 *
 * @author Ian Kennington Walter (http://ianvonwalter.com)
 */

(function(document, requirejs, require) {
  'use strict';

  requirejs.config({
    baseUrl: '.',
    paths: {
      'angular': [
        '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular.min',
        'public/lib/angular/angular'
      ],
      'angular-route': [
        '//ajax.googleapis.com/ajax/libs/angularjs/1.2.4/angular-route.min',
        'public/lib/angular-route/angular-route.min'
      ],
      'ng-autofocus': [
        'dist/ng-autofocus'
      ]
    },
    shim: {
      'angular' : { 'exports' : 'angular' },
      'angular-route': { deps:['angular'] },
      'ng-autofocus': { deps:['angular'] }
    }
  });

  require(['angular', 'angular-route', 'ng-autofocus'], function(angular) {
    var app = angular.module('ng-autofocus-demo', ['ngRoute', 'ng-autofocus'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider
          .when('/', {
            controller: 'HomeController',
            templateUrl: 'public/template/home.html'
          })
          .when('/form', {
            controller: 'FormController',
            templateUrl: 'public/template/form.html'
          })
          .otherwise({ redirectTo: '/' });
      }]);

    app
      .controller('HomeController', function() { })
      .controller('FormController', function() { });

    angular.bootstrap(document , ['ng-autofocus-demo']);
  });

})(document, requirejs, require);
