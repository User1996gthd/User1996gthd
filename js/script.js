$(document).ready(function(){
$('.slider').slick({
	 arrows:true,
	slidesToShow:3,
responsive: [
        {breakpoint: 1024, settings: {slidesToShow: 2}},
        {breakpoint: 500, settings: {slidesToShow: 1}}
      
    ]
	});



$('.burger-menu').click(function(){
	$('.burger-menu').toggleClass('active');
$('.link').toggleClass('mobilemenu');

});

$('.menu__item').click(function(){
	$('.burger-menu').toggleClass('active');
$('.link').toggleClass('mobilemenu');

});

$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
 
 
        $('body,html').animate({
            scrollTop: top
        }, 600);
  });

});