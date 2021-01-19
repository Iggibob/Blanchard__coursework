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
	
});


/* When the user clicks on the button, 
		toggle between hiding and showing the Header search-menu */
		function myFunction() {
			document.getElementById("headerSearchMenu").classList.toggle("search-show");
	}
	
	// Close the Header search-menu if the user clicks outside of it
	window.onclick = function(event) {
	if (!event.target.matches('.search__btn')) {

		var dropdowns = document.getElementsByClassName("search__block");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('search-show')) {
				openDropdown.classList.remove('search-show');
			}
		}
	}
}