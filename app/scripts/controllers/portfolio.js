'use strict';

/**
 * @ngdoc function
 * @name firstVisionApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the firstVisionApp
 */
angular.module('firstVisionApp').controller('PortfolioCtrl', function ()
{
  var portCtrl = this;


  /*----------------------------------------------------------------------------------
  Set up Iso
  ----------------------------------------------------------------------------------*/
  var divVideos = document.querySelector('#divVideos');
  portCtrl.iso = new Isotope( divVideos, {
    itemSelector: '.vItem',
    layoutMode: 'cellsByRow',
    cellsByRow: {
      columnWidth: 350,
      rowHeight: 217
    }
  });



  /*----------------------------------------------------------------------------------
  Categories
  ----------------------------------------------------------------------------------*/
  portCtrl.videoCategories = ['All', 'Commercials', 'Cooperate', 'Television'];
  portCtrl.currentCategory = 'All';

  portCtrl.setCurrentCategory = function (category) { portCtrl.currentCategory = category;};
  portCtrl.getCurrentCategory = function () { return portCtrl.currentCategory; };








});




/*----------------------------------------------------------------------------------
Isotope Video Layout
----------------------------------------------------------------------------------*/
//var divVideos = $('#divVideos');
//
//console.log(Is);
//
//// init
//divVideos.isotope({
//  // options
//  itemSelector: '.vitem',
//  layoutMode: 'fitRows'
//});

