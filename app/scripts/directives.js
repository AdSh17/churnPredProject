'use strict'
angular
    .module('churnPredApp')
    .directive('loadingBtn', ['$timeout', function($timeout){
        return {
            link: function(scope, element, attrs){
                element.bind('click', function(){
                  
                  if(scope.loading == true || scope.done == 'done') {
                    return;
                  }
                  
                  scope.loading = true;
                  
                  element.addClass('loading');
                  
                  var timeoutId = $timeout(function() {
                    scope.loading = false;
                    element.removeClass('loading');
                    scope.done = 'done';
                  }, 3000); 
                });
                 
            }
        };
    }]);
