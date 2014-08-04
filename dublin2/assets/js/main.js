<<<<<<< HEAD


console.log("main.js loaded");


$('.icon-left').waypoint(function() {
  	TweenMax.to(".icon-left", 1, {
  		opacity: 1,
  		marginLeft: "0",
		ease: Bounce.easeOut
	});

}, { offset: '80%' });

$('.icon-left-middle').waypoint(function() {
  	TweenMax.to(".icon-left-middle", 1.25, {
  		opacity: 1,
  		marginLeft: "0",
		ease: Bounce.easeOut
	});

}, { offset: '80%' });

$('.icon-right-middle').waypoint(function() {
  	TweenMax.to(".icon-right-middle", 1.5, {
  		opacity: 1,
  		marginLeft: "0",
		ease: Bounce.easeOut
	});

}, { offset: '80%' });

$('.icon-right').waypoint(function() {
  	TweenMax.to(".icon-right", 2, {
  		opacity: 1,
  		marginLeft: "0",
		ease: Bounce.easeOut
	});

}, { offset: '80%' });

$('.l-home-statement').waypoint(function() {
  	TweenMax.from(".l-home-statement", 2, {
  		opacity: 0,
  		marginLeft: "-200px",
		ease: Bounce.easeOut
	});

}, { offset: '80%' });

// $('.hero').waypoint(function() {
//     TweenMax.to(".hero", 2, {
//       opacity: 1,
//       marginLeft: "0",
//   });

// }, { offset: '20%' });






=======
console.log("main.js loaded");
>>>>>>> ea8a446f2438d1c870bceeffb135c37e775b5347
