window.addEventListener('DOMContentLoaded', function () {

	// Ссылки навигации плавно переходят к якорным блокам
	// Чем меньше значение, тем быстрее
	$(document).ready(function(){
		$(".header__nav").on("click",".nav__link", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
						top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1000);
		});
	});
	// Подписаться на рассылку плавно переходит к блоку контакты
	$(document).ready(function(){
		$(".hero__container").on("click",".hero__btn", function (event) {
				event.preventDefault();
				var id  = $(this).attr('href'),
						top = $(id).offset().top;
				$('body,html').animate({scrollTop: top}, 1000);
		});

		
	});

	// Header burger-menu
	document.querySelector('.burger').addEventListener('click', function () {
    document.getElementById('burgerMenu').style.transform = 'translateX(0%)';
  });
  document.querySelector('.burger-close').addEventListener('click', function () {
    document.getElementById('burgerMenu').style.transform = 'translateX(-101%)';
	});

	// Header search-menu
	document.querySelector('.search__btn').addEventListener('click', function () {
    document.getElementById("headerSearchMenu").classList.toggle("show");
	});
	document.querySelector('.search-close').addEventListener('click', function () {
    document.getElementById("headerSearchMenu").classList.remove("show");
  });


	// Gallery Choices
	const element = document.querySelector('#gallerySelectCustom');
    const choices = new Choices(element, {
      searchEnabled: false,

			itemSelectText: 'Нажмите для выбора',
				
  	});

	

	// Gallery Slider
	const swiper = new Swiper('.swiper-container', {
		// Default parameters
		loop: true,
		
		slidesPerView: 1,
		spaceBetween: 30,
		initialSlide: 14,
		speed: 400,
		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 768px
			768: {
				initialSlide: 6,
				spaceBetween: 34,

				slidesPerView: 2,/*сколько колонок*/
				slidesPerColumn: 2, /*сколько столбцов*/
				slidesPerGroup: 2, /*на сколько передвигаются*/
				
				speed: 600,
				loop: false,
			},
			// when window width is >= 1400px
			1400: {
				spaceBetween: 34,
				initialSlide: 3,

				slidesPerView: 3,
				slidesPerColumn: 2, 
				slidesPerGroup: 3, 
				
				speed: 1000,
				loop: false,
			},
			// when window width is >= 1700px
			1700: {
				spaceBetween: 50,
				initialSlide: 8,

				slidesPerView: 3,
				slidesPerColumn: 2, 
				slidesPerGroup: 3, 
				
				speed: 1000,
				loop: false,
			}
		},
		
		// Optional parameters
		direction: 'horizontal',
		loop: true,

		// Pagination arrows
		pagination: {
			el: '.gallery__swiper-pagination',
			type: 'fraction',
			clicable: true,
		},
		// Navigation arrows
		navigation: {
			nextEl: '.gallery__swiper-button-next',
			prevEl: '.gallery__swiper-button-prev',
			disabledClass: 'gallery__swiper-button-disabled',
		},

	});
	
});
