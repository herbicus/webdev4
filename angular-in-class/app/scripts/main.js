console.log('\'Allo \'Allo!');

var customerApp = angular.module('customerApp', []);

customerApp.controller('tmntController', function  ($scope) {
	// INSERT LOGIC HERE
	// function SouthParkController ($scope) {
		$scope.tmntCharacter =[
			{
				name: 'Leonardo',
				quote: 'Gimmie a break!',
				imgUrl: 'images/leo.jpg'
			},
			{
				name: 'Raphael',
				quote: 'Lez get em!',
				imgUrl: 'images/raph.jpg'
			},
			{
				name: 'Michaelangelo',
				quote: 'Cowabunga!',
				imgUrl: 'images/mike.jpg'
			},
			{
				name: 'Shredder',
				quote: "Die die die!",
				imgUrl: 'images/shredder.jpg'
			}
		];

		// SCOPE BOUND VARIABLES
		$scope.selectedText="";
		$scope.date = new Date();

		$scope.tmntClick = function (quote) {
			// console.log(event);
			// return alert(quote);
			$scope.selectedText = quote;
		};
	//}
});





