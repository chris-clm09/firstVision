'use strict';

/**
 * @ngdoc function
 * @name firstVisionApp.controller:FeaturedcarouselCtrl
 * @description
 * # FeaturedcarouselCtrl
 * Controller of the firstVisionApp
 */
angular.module('firstVisionApp').controller('FeaturedCarouselCtrl', function () {

  var ctrl = this;

  ctrl.featuredVideos = [
    {
      title: 'Dam Handstand',
      url: '',
      png: 'images/featured/feature1.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      title: 'O The Muscles',
      url: '',
      png: 'images/featured/feature2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      title: 'Yo Ho Pirates',
      url: '',
      png: 'images/featured/feature3.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
    }
  ];

});
