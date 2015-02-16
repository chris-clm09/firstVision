'use strict';

/**
 * @ngdoc function
 * @name firstVisionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstVisionApp
 */
angular.module('firstVisionApp').controller('MainCtrl', function ($scope) {

    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];



  });


/**
 * Navigation Bar Controller
 */
angular.module('firstVisionApp').controller('NavCntrl', function ($scope) {

  var tabCntrl = this;

  tabCntrl.currentTabName = 'home';

  /**
   * Returns if tab is the currently selected tab.
   * @param tab
   * @returns {boolean}
   */
  tabCntrl.tabIsSelected = function (tab) {
    return tabCntrl.currentTabName === tab;
  };

  /**
   * Sets the current tab to setTab
   * @param setTab
   */
  tabCntrl.setTab = function (setTab){
    tabCntrl.currentTabName = setTab;
  };

});
