$(document).ready(function(){
      $('.slider').bxSlider();
	   $.scrollUp();
	   $('#menu').slicknav();
	   new WOW().init();
	   var mixer = mixitup('.gallery');
	  
	  $(".owl-carousel").owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,
				 autoplay:true,
				autoplayTimeout:1000,
				autoplayHoverPause:true,
				responsive:{
					0:{
						items:1,
						nav:true
					},
					600:{
						items:3,
						nav:false
					},
					1000:{
						items:5,
						nav:true,
						loop:true
					}
				}
			});
	  
	  
	  $("#tab-link-1").click(function(){
                $("#tab-item-1").fadeIn(1600);
				$("#tab-item-2").hide();
				$("#tab-item-3").hide();
				
				
            });
			
	  $("#tab-link-2").click(function(){
                $("#tab-item-2").fadeIn(1600);
				 $("#tab-item-1").hide();
				 $("#tab-item-3").hide();
				
				
            });
			
			
	  
	  $("#tab-link-3").click(function(){
                $("#tab-item-3").fadeIn(1600);
				$("#tab-item-1").hide();
				$("#tab-item-2").hide();
				
				
            });
			
			
	  $(".tabs-list ul li").click(function(){
				$(this).addClass('active').siblings().removeClass('active');
	  
	  });
	  
	  
	  
	  
	  
	  
	  
	  $('.main-menu ul li').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});


       $('.navbar-nav a[href^="#"]').click(function(e){
       		e.preventDefault();

       		var target = this.hash;

       		$('html, body').animate({
       			scrollTop: $(target).offset().top - 75
       		}, 2500);


       });
	  
	  
	  
	   
	  
	  
	  
	  
	  
	  
    });
	




function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
					{
						"featureType": "road",
						"elementType": "geometry",
						"stylers": [
							{
								"lightness": 100
							},
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"color": "#C6E2FF"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#C5E3BF"
							}
						]
					},
					{
						"featureType": "road",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#D1D1B8"
							}
						]
					}
				]

		
		};
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.6700, -73.9400),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }














	
	
	
	
	
	