'use strict';

/**
 * @ngdoc function
 * @name firstVisionApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the firstVisionApp
 */
angular.module('firstVisionApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
