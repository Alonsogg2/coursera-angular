// (function() {
//     'use strict';

//     angular.module('LunchCheck',[])
//     .controller('LunchCheckController',LunchCheckController);

//     LunchCheckController.$inject=['$scope','$filter'];
//     function LunchCheckController($scope,$fil){
//         $scope.listFoods="";
//         $scope.message="";

//         $scope.showFoods=function(){
//             let foods=$scope.listFoods.split(',');
//             if(foods.length>3)
//                 $scope.message="Too much!";
//             else
//                 $scope.message="Enjoy!";
//         };
//     }
// })();

!function(){"use strict";function a(a,b){a.listFoods="",a.message="",a.showFoods=function(){a.listFoods.split(",").length>3?a.message="Too much!":a.message="Enjoy!"}}angular.module("LunchCheck",[]).controller("LunchCheckController",a),a.$inject=["$scope","$filter"]}()