/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";
	$("a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel'});
	/* global google: false */
	
	$('.navbar-collapse a').bind('click', function(){
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
	
	/* ---------------------------------------------------------------------- */
	/*	Slitslider
	/* ---------------------------------------------------------------------- */
	try{
		slitslider();
	} catch(err) {
	}
	var winDow = $(window);
	winDow.bind('resize', function(){
		try{
			slitslider();			
		} catch(err) {
		}
	});

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.projects-container');
		var $filter=$('.non-paginated .filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('a').click(function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


		var filterItemA	= $('.filter li a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});

	/*-------------------------------------------------*/
	/* =   Smooth scroll
	/*-------------------------------------------------*/

	var currentLocation = location.href;
	
	var hashPosition = currentLocation.indexOf('#');
	if (hashPosition > 1) {
		currentLocation = currentLocation.substr(0, hashPosition);
	}
	
	//Get Sections top position
	function getTargetTop(elem){
		
		//gets the id of the section header
		//from the navigation's href e.g. ("#html")
		var id = elem.attr("href");
		
		id = id.substr(id.indexOf('#'));

		//Height of the navigation
		var offset = 100;

		//Gets the distance from the top and 
		//subtracts the height of the nav.
		return $(id).offset().top - offset;
	}

	//Smooth scroll when user click link that starts with #

	var elemHref = $('.navbar-right a[href^="#"], .navbar-right a[href^="' + currentLocation + '#"], .navbar-right a[href^="' + currentLocation + '/#"]')
elemHref = $($.grep(elemHref, function (section) {
  var hash = $(section).attr('href');
  hash = hash.substr(hash.indexOf('#'));
  return $(hash).length > 0;
        }));

	elemHref.click(function(event) {
		//alert (currentLocation);
		//gets the distance from the top of the 
		//section refenced in the href.
		var target = getTargetTop($(this));

		//scrolls to that section.
		$('html, body').animate({scrollTop:target}, 500);

		//prevent the browser from jumping down to section.
		event.preventDefault();
	});

	//Pulling sections from main nav.
	var sections = elemHref;

	// Go through each section to see if it's at the top.
	// if it is add an active class
	function checkSectionSelected(scrolledTo){
		
		//How close the top has to be to the section.
		var threshold = 101;

		var i;

		for (i = 0; i < sections.length; i++) {
			
			//get next nav item
			var section = $(sections[i]);

			//get the distance from top
			var target = getTargetTop(section);
			
			//Check if section is at the top of the page.
			if (scrolledTo > target - threshold && scrolledTo < target + threshold) {

				//remove all selected elements
				sections.removeClass("active");

				//add current selected element.
				section.addClass("active");
                                //var hash = section.attr('href');
                                //hash = hash.substr(hash.indexOf('#'));
                                //window.location.hash = hash;
			}

		};
	}

	//Check if page is already scrolled to a section.
	checkSectionSelected($(window).scrollTop());

	$(window).scroll(function(e){
		checkSectionSelected($(window).scrollTop())
	});
	
	// Toggles
	$(".toggle-container").hide();
	$(".toggle-trigger").click(function(e){
		e.preventDefault();
		$(this).toggleClass("open").next().slideToggle(500);
		return false;
	});
	$(".nav-list.affix").affix();
	$(".alert").alert();

	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/
	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			animation: "fade"
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  Banner slider
	/*-------------------------------------------------*/

	var sliderTestimonial = $('.bxslider');
	try{		
		sliderTestimonial.bxSlider({
			mode: 'vertical'
		});
	} catch(err) {
	}
	
	/*-------------------------------------------------*/
	/* =  blog slider post
	/*-------------------------------------------------*/
	try {

		var blogSlider = $('.flexslider');

		blogSlider.flexslider({
			animation: "fade"
		});
	} catch(err) {

	}
	
	/* ---------------------------------------------------------------------- */
	/*	accordion
	/* ---------------------------------------------------------------------- */
		try {
			var tabContent = $(".tabs");
			tabContent.tabs();
		} catch(err) {

		}

		var acordDivHide = $('.accordion div'),
			acordHeadClick = $('.accordion h2');


		acordDivHide.addClass('hide');

		acordHeadClick.on('click', function() {
			var $this = $(this);
			
			if ( !$this.hasClass('active')) {
			acordHeadClick.removeClass('active');
			$this
				.addClass('active')
				.next()
					.slideDown(300)
					.siblings('.accordion div')
						.slideUp(300);
			}
			else {
				$(this).removeClass('active')
						.next()
						.slideUp(300);
			}
		});
});


function slitslider() {
	"use strict";

	var Page = (function() {

			var $navArrows = $( '#nav-arrows' ),
				$nav = $( '#nav-dots > span' ),
				slitslider = $( '#slider' ).slitslider( {
					onBeforeChange : function( slide, pos ) {

						$nav.removeClass( 'nav-dot-current' );
						$nav.eq( pos ).addClass( 'nav-dot-current' );
					}
				} ),
				init = function() {
					initEvents();
				},
				initEvents = function() {
					// add navigation events
					$navArrows.children( ':last' ).on( 'click', function() {
						slitslider.next();
						return false;
					} );
					$navArrows.children( ':first' ).on( 'click', function() {
						slitslider.previous();
						return false;
					} );
					$nav.each( function( i ) {
						$( this ).on( 'click', function() {
							var $dot = $( this );
							if( !slitslider.isActive() ) {
								$nav.removeClass( 'nav-dot-current' );
								$dot.addClass( 'nav-dot-current' );
							}
							slitslider.jump( i + 1 );
							return false;
						} );
					} );
				};
			return { init : init };
		})();
		Page.init();
}
/********* Contact Widget *************/
function checkemail(emailaddress){
	"use strict";
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i); 
	return pattern.test(emailaddress); 
}

jQuery(document).ready(function(){ 
	"use strict";
	jQuery('#registerErrors, .widgetinfo').hide();		
	var $messageshort = false;
	var $emailerror = false;
	var $nameshort = false;
	var $namelong = false;
	
	jQuery('#contactFormWidget input#wformsend').click(function(){ 
		var $name = jQuery('#wname').val();
		var $email = jQuery('#wemail').val();
		var $message = jQuery('#wmessage').val();
		var $contactemail = jQuery('#wcontactemail').val();
		var $contacturl = jQuery('#wcontacturl').val();
		var $subject = jQuery('#wsubject').val();
	
		if ($name !== '' && $name.length < 3){ $nameshort = true; } else { $nameshort = false; }
		if ($name !== '' && $name.length > 30){ $namelong = true; } else { $namelong = false; }
		if ($email !== '' && checkemail($email)){ $emailerror = true; } else { $emailerror = false; }
		if ($message !== '' && $message !== 'Message' && $message.length < 3){ $messageshort = true; } else { $messageshort = false; }
		
		jQuery('#contactFormWidget .loading').animate({opacity: 1}, 250);
		
		if ($name !== '' && $nameshort !== true && $namelong !== true && $email !== '' && $emailerror !== false && $message !== '' && $messageshort !== true && $contactemail !== ''){ 
			jQuery.post($contacturl, 
				{type: 'widget', contactemail: $contactemail, subject: $subject, name: $name, email: $email, message: $message}, 
				function(/*data*/){
					jQuery('#contactFormWidget .loading').animate({opacity: 0}, 250);
					jQuery('.form').fadeOut();
					jQuery('#bottom #wname, #bottom #wemail, #bottom #wmessage').css({'border':'0'});
					jQuery('.widgeterror').hide();
					jQuery('.widgetinfo').fadeIn('slow');
					jQuery('.widgetinfo').delay(2000).fadeOut(1000, function(){ 
						jQuery('#wname, #wemail, #wmessage').val('');
						jQuery('.form').fadeIn('slow');
					});
				}
			);
			
			return false;
		} else {
			jQuery('#contactFormWidget .loading').animate({opacity: 0}, 250);
			jQuery('.widgeterror').hide();
			jQuery('.widgeterror').fadeIn('fast');
			jQuery('.widgeterror').delay(3000).fadeOut(1000);
			
			if ($name === '' || $name === 'Name' || $nameshort === true || $namelong === true){ 
				jQuery('#wname').css({'border-left':'4px solid #red'}); 
			} else { 
				jQuery('#wname').css({'border-left':'4px solid #929DAC'}); 
			}
			
			if ($email === '' || $email === 'Email' || $emailerror === false){ 
				jQuery('#wemail').css({'border-left':'4px solid red'});
			} else { 
				jQuery('#wemail').css({'border-left':'4px solid #929DAC'}); 
			}
			
			if ($message === '' || $message === 'Message' || $messageshort === true){ 
				jQuery('#wmessage').css({'border-left':'4px solid red'}); 
			} else { 
				jQuery('#wmessage').css({'border-left':'4px solid #929DAC'}); 
			}
			
			return false;
		}
	});
});