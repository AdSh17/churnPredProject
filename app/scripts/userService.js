'use strict'
angular
	.module('churnPredApp')
	.factory("userService",function($firebaseAuth){
		
		function newUserRef(user) {
			var ref = new Firebase("https://churnpredictionapp.firebaseio.com" + user.uid);
			return $firebaseObject(ref);
		}

		function getUserData(user) {
			var ref = new Firebase("https://churnpredictionapp.firebaseio.com" + user);
			return $firebaseObject(ref);
		}

		function getLoggedInUser() {
			var user = localStorage.getItem('firebase:session::churnPredApp');
			if(user) {
				return JSON.parse(user);
			}
		}

		return {
			newUserRef: newUserRef,
			getUserData: getUserData,
			getLoggedInUser: getLoggedInUser
		}
	

});