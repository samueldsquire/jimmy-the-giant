jQuery(document).ready(function($){
	$('#sideMenuOpener').on('click', function(){
		$('#sideMenu').toggleClass('sideMenuOpen');
		$('.entire-site').toggleClass('entire-site--hidden');
		$('.menu-icon').toggleClass('transformed');
		$('.menu-icon__container').toggleClass('transformed');
	});
	$('#sideMenu').on('click', function(){
		$('#sideMenu').removeClass('sideMenuOpen');
		$('.entire-site').removeClass('entire-site--hidden');
		$('.menu-icon').removeClass('transformed');
		$('.menu-icon__container').removeClass('transformed');
	});
	$(document).keyup(function(e) {
	    if (e.keyCode == 27) {
	    	$('#sideMenu').removeClass('sideMenuOpen');
	    	$('.entire-site').removeClass('entire-site--hidden');
	    	$('.menu-icon').removeClass('transformed');
	    	$('.menu-icon__container').removeClass('transformed');
	    }
	});

	// Fix mobile 100vh
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// We listen to the resize event
	window.addEventListener('resize', () => {
	  // We execute the same script as before
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

});
