const about = document.querySelector('#about');
const skill = document.querySelector('#skills');
const scroll = document.querySelector('.scroll');

const cont1 = document.querySelector('#container-1');
const cont2 = document.querySelector('#container-2');
const cont3 = document.querySelector('#container-3');

const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');

const img5 = document.querySelector('.img-5');
const img6 = document.querySelector('.img-6');
const img7 = document.querySelector('.img-7');
const img8 = document.querySelector('.img-8');

const img9  = document.querySelector('.img-9');
const img10 = document.querySelector('.img-10');
const img11 = document.querySelector('.img-11');
const img12 = document.querySelector('.img-12');

window.addEventListener('scroll', () => {
  const width = document.body.getBoundingClientRect().width;
  const offsetY = window.scrollY;

  const containerPos1 = cont1.getBoundingClientRect().top;
  const containerPos2 = cont2.getBoundingClientRect().top;
  const containerPos3 = cont3.getBoundingClientRect().top;

  about.style.transform = `translateX(${offsetY * 0.6 - 200}px)`;
  skill.style.transform = `translateX(${width - offsetY * 0.6 + 1100}px)`;
  scroll.style.opacity = 1.25 - offsetY / 450;

  img1.style.transform = `translateY(${containerPos1 - (offsetY * 1.3) + 950}px)`;
  img2.style.transform = `translateY(${containerPos1 - (offsetY * 0.8) + 850}px)`;
  img3.style.transform = `translateY(${containerPos1 - (offsetY * 1.2) + 1650}px)`;
  img4.style.transform = `translateY(${containerPos1 - (offsetY * 0.9) + 1550}px)`;

  img5.style.transform = `translateY(${containerPos2 - (offsetY * 0.3) - 250}px)`;
  img6.style.transform = `translateY(${containerPos2 - (offsetY * 0.8) + 1350}px)`;
  img7.style.transform = `translateY(${containerPos2 - (offsetY * 1.3) + 2950}px)`;
  img8.style.transform = `translateY(${containerPos2 - (offsetY * 0.7) + 1750}px)`;

  img9.style.transform =  `translateY(${containerPos3 - (offsetY * 0.3) + 100}px)`;
  img10.style.transform = `translateY(${containerPos3 - (offsetY * 0.8) + 2250}px)`;
  img11.style.transform = `translateY(${containerPos3 - (offsetY * 1.4) + 4750}px)`;
  img12.style.transform = `translateY(${containerPos3 - (offsetY * 0.7) + 2450}px)`;
});

// Scroll to top on window reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
