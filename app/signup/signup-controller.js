(function(){
  angular.module('MeanNetwork')
  .controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http) {
    $scope.createUser = function() {
      console.log($scope.newUser);
      $http.post('api/user/signup', $scope.newUser).success(function(response){
      }).error(function(error){
        console.log(error);
      })
    }
  }])  //the reason why you list the dependencies as arguments for the function is for minification purposes
}());
