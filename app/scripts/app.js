'use strict';

/**
 * @ngdoc overview
 * @name firstVisionApp
 * @description
 * # firstVisionApp
 *
 * Main module of the application.
 */
angular
  .module('firstVisionApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contactUs', {
        templateUrl: 'views/contactus.html',
        controller: 'ContactusCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/ourTeam', {
        templateUrl: 'views/ourteam.html',
        controller: 'OurteamCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
