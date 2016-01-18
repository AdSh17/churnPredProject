'use strict'
angular
	.module("churnPredApp")
	.factory("churnAuthService",function($firebaseAuth){
		var authRef = new Firebase ("https://churnpredictionapp.firebaseio.com");
		return $firebaseAuth (authRef);

	});