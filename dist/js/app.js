const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeMenu = document.querySelector('.menu__close'),
	  overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('menu_active'),
	overlay.classList.add('overlay_active');
});

closeMenu.addEventListener('click', () => {
	menu.classList.remove('menu_active'),
	overlay.classList.remove('overlay_active');
});

const counters = document.querySelectorAll('.skill-list__percent'),
      lines = document.querySelectorAll('.skill-list__progressbar span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});