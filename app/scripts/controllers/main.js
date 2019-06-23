'use strict';

//import { isMainThread } from "worker_threads";

/**
 * @ngdoc function
 * @name treeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeApp
 */
angular.module('treeApp')
  .controller('MainCtrl', ['treeDataService', function (treeDataService) {
    
      this.data = treeDataService.data;
      
  }]);
