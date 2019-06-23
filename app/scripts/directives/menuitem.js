'use strict';

/**
 * @ngdoc directive
 * @name treeApp.directive:menuItem
 * @description
 * # menuItem
 */
angular.module('treeApp')
  .directive('menuItem', function () {
    return {
      templateUrl: '../../templates/menu-item.html',
      restrict: 'A',
      scope: {
        node: '='
      },
      link: function postLink(scope, element, attrs) {
        scope.selected = function (data) {
          if (data.child){
            checkChild(data.child, data.checked);
          }
          data.highlight = false;
          scope.$parent.$emit('checkChanged');
        };
          
        scope.$on('checkChanged', function () {
          if (scope.node.child) {
            var isChecked = true, isHighlighted = false;
            for (var i = 0; i < scope.node.child.length; i++) {
              isChecked = isChecked && scope.node.child[i].checked;
              isHighlighted = isHighlighted || scope.node.child[i].checked || scope.node.child[i].highlight;
            }
            scope.node.checked = isChecked;
            scope.node.highlight = !isChecked && isHighlighted;
          }
        });
  
        function checkChild(data,checked){
           data.forEach(element => {
              element.checked = checked;
              element.highlight = false;
              if(element.child){
                checkChild(element.child, checked);
              }
            });
        }
      }
    };
  });
