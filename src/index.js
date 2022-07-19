import 'normalize.css';
import './styles/main.scss';

const body = document.body;

/*== buger and popup ==*/
const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  });

  menu.addEventListener('click', event => {
    if(event.target.classList.contains('menu__body')){
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    }
  });

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
    });
  });
}
/*======================*/

/* == плавный скролл == */
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
/*======================*/