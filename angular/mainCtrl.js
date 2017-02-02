angular.module('portfolio').controller('mainCtrl', function($scope,mainService,$timeout) {
  $scope.submit = function(n,e,p,m){
    if(!n || !e || !p || !m){
      alert('enter all fields')
    }
    else {
      $scope.contact ={
        name: n,
        email: e,
        phone: p,
        message: m
      }
      console.log($scope.contact);
    }
  }
})
