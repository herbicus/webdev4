console.log("main.js loaded");

if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var hobbySiteAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// EVENT HANDLERS

	// mobile nav 
	$('#hamburger').on('click', function(){
		console.log("hamburger clicked");
		$('.mobile-nav-menu').slideToggle();
	});

	$(document).on("click", "#one", function(){
		console.log("click happened");
		$('.l-projects').slideToggle();
	});

	$(document).on("click", "#two", function(){
		console.log("click happened");
		$('.l-about').slideToggle();
	});

	$(document).on("click", "#three", function(){
		console.log("click happened");
		$('.l-contact').slideToggle();
	});

	$(document).on("click", "#four", function(){
		console.log("click happened");
		$('.l-illustrations').slideToggle();
	});

	
	// WAYPOINTS
	$('#one').waypoint(function() {
	  	TweenMax.from("#one", 0.50, {
	  		opacity: 0,
	  		top: 50
		});

	}, { offset: '80%' });

	$('#two').waypoint(function() {
	  	TweenMax.from("#two", 0.75, {
	  		opacity: 0,
	  		top: 50
		});

	}, { offset: '80%' });

	$('#three').waypoint(function() {
	  	TweenMax.from("#three", 1.0, {
	  		opacity: 0,
	  		top: 50
		});

	}, { offset: '80%' });

	$('#four').waypoint(function() {
	  	TweenMax.from("#four", 1.25, {
	  		opacity: 0,
	  		top: 50
		});

	}, { offset: '80%' });

	// SCROLLING ROBOT HEAD
	var tl = new TimelineMax();

	// ANIMATION
	tl.to("#robot-head", 2, {top: 200, left: 400, ease: Linear.easeNone});
	tl.to("#robot-head", 2, {top: 400, left: 200, ease: Linear.easeNone});
	tl.to("#robot-head", 2, {top: 800, left: 500, ease: Linear.easeNone});
	tl.to("#robot-head", 2, {top: 1000, left: 100, ease: Linear.easeNone});
	tl.to("#robot-head", 2, {top: 1200, left: 300, ease: Linear.easeNone});

	tl.pause();

	var ratio = 100; // TOGGLE SPEED

	$(window).on("scroll", function() {
		var t = $(window).scrollTop() / ratio;
		console.log("seek timeline to time: " + t);
		tl.seek(t);
	})


	// BOTTOM BEFORE CLOUSURE
	var init = function() {
		console.log('hobbySiteAPI works');
		// myFunctions();
	};
	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	hobbySiteAPI.init();

});

