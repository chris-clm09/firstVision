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
  Categories
  ----------------------------------------------------------------------------------*/
  portCtrl.videoCategories = ['All', 'Commercials', 'Cooperate', 'Television'];
  portCtrl.currentCategory = 'All';

  portCtrl.setCurrentCategory = function (category) { portCtrl.currentCategory = category;};
  portCtrl.getCurrentCategory = function () { return portCtrl.currentCategory; };

  portCtrl.videos = [
    {
      png: 'images/scenery.jpg',
      videoId: '12309849102',
      title: 'Scenery Beautiful'
    },
    {
      png: 'images/scenery.jpg',
      videoId: '12309849102',
      title: 'Scenery Beautiful'
    },
    {
      png: 'images/scenery.jpg',
      videoId: '12309849102',
      title: 'Scenery Beautiful'
    },
    {
      png: 'images/scenery.jpg',
      videoId: '12309849102',
      title: 'Scenery Beautiful'
    },
    {
      png: 'images/scenery.jpg',
      videoId: '12309849102',
      title: 'Scenery Beautiful'
    },
    {
      png: 'images/scenery.jpg',
      videoId: '12309849102',
      title: 'Scenery Beautiful'
    }
  ];


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

