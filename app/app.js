(function (){
  angular.module('MeanNetwork', ['ui.router']) //the name of application and the list of dependencies
.config(function($stateProvider){

  $stateProvider.state('signUp', {
    url: "/signup",
    templateUrl: "app/signup/signup.html",
    controller: "SignupController"
  })
  })
}());
