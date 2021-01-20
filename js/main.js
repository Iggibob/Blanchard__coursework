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
	
});
