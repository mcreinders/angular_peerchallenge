/**
 * Created by user on 1/8/16.
 */
var app = angular.module('myApp', ['ngAnimate']);

app.controller('myController', function($scope, $http){
    $scope.getCandidates = function(){
        $http({
            method: 'GET',
            url: "/getDemocrats"
        }).then(function(response){
            $scope.democrats = response.data.candidates;
            console.log($scope.democrats);
        });

        $http({
            method: 'GET',
            url: "/getRepublicans"
        }).then(function(response){
            $scope.republicans = response.data.candidates;
            console.log($scope.republicans);
        });
    };

    $scope.selectPresident = function(){
        $http({
            method: 'GET',
            url: "/getPresident"
        }).then(function(response){
            console.log(response);
            $scope.president = response.data;
        });
    };


});

