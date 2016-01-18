'use strict'
angular
	.module('churnPredApp')
	.controller("churnAuthCtrl",function($rootScope,$scope,churnAuthService, userService, $state) {
	$rootScope.loggedIn = false;
		$scope.login = function() 
		{
			churnAuthService.$authWithPassword({
				email: $scope.email,
				password: $scope.password
			}).then(function(data) {
			   $scope.email = null;
				$scope.password = null;
				$state.go('home');
				$rootScope.loggedIn = true;
			}).catch(function(error) {
				console.log("login error :" + error);
			});
		}

		$scope.createUser = function()
		{

			churnAuthService.$createUser({
				email: $scope.newEmail,
				password: $scope.newPassword
			}).then(function(userData) {
			    console.log("success :" + userData);

				function saveUser(userData)
				{
					
					var user = userService.newUserRef(userData);
					user.username = $scope.userName;
					user.email = $scope.email;
					user.$save().then(function(success) {
    					 console.log("success :" + userData);
						$scope.userName = null;
						$scope.password = null;
						$scope.email = null ;
						$state.go('home');
					}, function(error) 
					{
						console.log("save there was an error! " + error);
					});
				}
			}).catch(function(error) {
				console.log("create error :" + error);
			});
		}

	
	})
.controller("logOutCtrl",function($state,$rootScope,$scope,churnAuthService)
{
	churnAuthService.$unauth();
		$rootScope.loggedIn = false;
		$state.go('login');
		
})
.controller("footCtrl",function($scope,$sce){
	   	 $scope.date = $sce.trustAsHtml("&copy;" + new Date().getFullYear() + ". All rights reserved.");

	   });
		