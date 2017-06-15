$(function(){

	var screenHeight = $(window).height();
	$('body > section').height(screenHeight);




	$.stellar({
		horizontalScrolling: false
	});



	var fadeSpeed = 3000;


	$('section#box1').find('h3').hide();

	$('section#box2').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box1').find('h3').fadeIn(fadeSpeed);

		}

		},{offset: 400});

		$('section#box2').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box1').find('h2').show();

		}

		},{offset: 400});

		$('section#box2').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box1').find('h4').hide();

		}

		},{offset: 400});

		$('section#box1').find('h3').hide();


	$(function(){
		$('section#box1').find('h1,.tiger,h4').fadeIn(5000);
	});

	$('section#box2').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box2').find('h1').fadeIn(fadeSpeed);

		}

		},{offset: 400});

	var fadeSpeed = 1000;

	$('section#box2').find('h1,.main,.date,.main_img').hide();

	$('section#box2').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box2').find('h1').fadeIn(fadeSpeed);

		}

		if (direction === 'up') {

			$('section#box2').find('h1').fadeOut(fadeSpeed);

		}

		},{offset: 300});

	$('section#box2').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box2').find('.main_img,.date').fadeIn(fadeSpeed);

		}

		if (direction === 'up') {

			$('section#box2').find('.main_img,.date').fadeOut(fadeSpeed);

		}

		},{offset: 100});


		$('section#box2').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box2').find('.main').fadeIn(fadeSpeed);

		}

		if (direction === 'up') {

			$('section#box2').find('.main').fadeOut(fadeSpeed);

		}

		},{offset: -100});

		$('section#box3').waypoint(function(direction){

		if (direction === 'down') {


		$('section#box3').find('.img1,.img2,.img3').toggleClass('motion');
			$('section#box3').find('.img4,.img5').toggleClass('action');

		}

		if (direction === 'up') {


		$('section#box3').find('.img1,.img2,.img3').toggleClass('motion');
			$('section#box3').find('.img4,.img5').toggleClass('action');

		}
		 },{offset:200});

		$('section#box3').find('h1,.total').hide();

	$('section#box3').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box3').find('h1,.total').fadeIn(fadeSpeed);

		}

		if (direction === 'up') {

			$('section#box3').find('h1,.total').fadeOut(fadeSpeed);

		}

		},{offset: 300});





		$('section#box4').find('h1').hide();

	$('section#box4').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box4').find('h1').fadeIn(fadeSpeed);

		}

		if (direction === 'up') {

			$('section#box4').find('h1').fadeOut(fadeSpeed);

		}

		},{offset: 300});


	var fadeSpeed = 1500;

	$('section#box4').find('.imagebox').hide();

	$('section#box4').waypoint(function(direction){

		if (direction === 'down') {

			$('section#box4').find('.imagebox').fadeIn(fadeSpeed);

		}
		if (direction === 'up') {

			$('section#box4').find('.imagebox').fadeOut(fadeSpeed);

		}

		},{offset: 100});

	$( '#menu-button' ).click( function()
{

	$( '#menu-target' ).slideToggle() ;

} ) ;


});








