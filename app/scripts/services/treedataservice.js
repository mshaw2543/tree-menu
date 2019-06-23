'use strict';

/**
 * @ngdoc service
 * @name treeApp.treeDataService
 * @description
 * # treeDataService
 * Service in the treeApp.
 */
angular.module('treeApp')
  .service('treeDataService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.data = [{
      name:"Person1",
      address:"HSR LAYOUT",
      checked: false,
      highlight: false
    },{
      name: "Person2",
      checked: false,
      highlight: false,
      child: [{
          name: "Person4",
          child: [
            {name:'Person5',
            child: [
              {name:'Person11',
            checked: false,
            highlight: false},
            {name:'Person12',
            checked: false,
            highlight: false
          }],
          checked: false,
          highlight: false},
          {name:'Person6',
          checked: false,
          highlight: false
        }],
        checked:false,
        highlight: false
        },{
          name: "Person7",
          checked: false,
          highlight: false
        }
      ]
      },{
        name: "Person3",
        child: [{
          name: "Person8",
          checked: false,
          highlight: false
        },{name: "Person9",
        checked: false,
        highlight: false}],
        checked: false,
        highlight: false
      }];
  });
