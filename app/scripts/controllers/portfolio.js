'use strict';

/**
 * @ngdoc function
 * @name firstVisionApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the firstVisionApp
 */
angular.module('firstVisionApp').controller('PortfolioCtrl', function ($scope)
{
  var portCtrl = this;


  /*----------------------------------------------------------------------------------
  Categories
  ----------------------------------------------------------------------------------*/
  portCtrl.videoCategories = ['All', 'Commercials', 'Cooperate', 'Television'];
  portCtrl.currentCategory = 'All';

  portCtrl.setCurrentCategory = function (category) { portCtrl.currentCategory = category;};
  portCtrl.getCurrentCategory = function () { return portCtrl.currentCategory; };






});

