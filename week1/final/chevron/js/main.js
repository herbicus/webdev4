console.log("im here");

	$(document).ready(function(){
		$(window).scroll(function() {
	    var x = $(this).scrollTop();
	    $('IMG').css('top', parseInt(-x / 3) + 'px');
	});

		$("#water").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#uno").offset().top
		    }, 2000);
		});

		$("#bio").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#dos").offset().top
		    }, 2000);
		});

		$("#gas").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#tres").offset().top
		    }, 2000);
		});

		$("#green").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#cuatro").offset().top
		    }, 2000);
		});

		$("#top").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#da-top").offset().top
		    }, 2000);
		});

	$('.accordion').squeezebox();

	// $('.accordion').squeezebox({
		// headers: '.squeezhead',
		// folders: '.squeezecnt',
		// closeOthers: true,
		// closedOnStart: true,
		// animated : true
		// onOpen: function(el){ 
		//    el.clickedEl.addClass('accordion_open'); 
		//  }, 
		//   onClose: function(el){ 
		//    el.clickedEl.removeClass('accordion_open'); 
		//  } 
	// });

	// $("#text-one").on("click", function(){
	// 	console.log("botton clicked");
	// 	$(".squeezecnt").squeezebox();
	// });

	// Green house management

	// $("#text-three").on("click", function(){
	// 	console.log("gas button pushed");
	// 	$("#chart").slideToggle();
	// })

	// $(function() {
	//   $("#bars li .bar").each( function( key, bar ) {
	//     var percentage = $(this).data('percentage');
	    
	//     $(this).animate({
	//       'height' : percentage + '%'
	//     }, 1000);
	//   });
	// });

	//try 
	$("#text-three").on("click", function(){
		console.log("gas button pushed");
		$("#chart").slideToggle();
		$(function() {
		  $("#bars li .bar").each( function( key, bar ) {
		    var percentage = $(this).data('percentage');
		    
		    $(this).animate({
		      'height' : percentage + '%'
		    }, 1000);
		  });
		});
	})

	$("#text-one").on("click", function(){
		console.log("water button pushed");
		$("#chartz").slideToggle();
		$(function() {
		  $("#barsz li .barz").each( function( key, bar ) {
		    var percentage = $(this).data('percentage');
		    
		    $(this).animate({
		      'height' : percentage + '%'
		    }, 1000);
		  });
		});
	})



	

});