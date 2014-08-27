console.log("main js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var tigersPawAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// EVENT HANDLERS
	$('#spirits').on('click', function() {
	    $('.carousel').carousel(0);
	});

	$('#menu').on('click', function() {
	    $('.carousel').carousel(1);
	});

	$('#about').on('click', function() {
	    $('.carousel').carousel(2);
	});

	$('#rsvp').on('click', function() {
	  $('.carousel').carousel(3);
	});

	// BOTTOM BEFORE CLOUSURE
	var init = function() {
		console.log('tigersPawAPI works');
		// myFunctions();
	};
	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	'use strict';
	tigersPawAPI.init();

});


// $(document).on("ready", function(e){
// 	'use strict';

// 	console.log(e);

// 	var items = ["red", 'blue', "green"];

// 	for (var i = 0; i < items.length; i++) {
// 		console.(logitems[i]);
// 	};

// 	var item = _.filter(items, function(val){
// 		return val === "green";
// 	});
// });