const about = document.querySelector('#about');
const skill = document.querySelector('#skills');
const scroll = document.querySelector('.scroll');

const img1 = document.querySelector('.img-1');
const img2 = document.querySelector('.img-2');
const img3 = document.querySelector('.img-3');
const img4 = document.querySelector('.img-4');

const img5 = document.querySelector('.img-5');
const img6 = document.querySelector('.img-6');
const img7 = document.querySelector('.img-7');

const img8 = document.querySelector('.img-8');
const img9 = document.querySelector('.img-9');
const img10 = document.querySelector('.img-10');

window.addEventListener('scroll', () => {
  const width = document.body.getBoundingClientRect().width;
  const offsetY = window.scrollY;

  about.style.transform = `translateX(${offsetY * 0.6 - 200}px)`;
  skill.style.transform = `translateX(${width - offsetY * 0.6}px)`;
  scroll.style.opacity = 1.25 - offsetY / 450;

  img1.style.transform = `translateY(${scrollY * -1.0 + 800}px)`;
  img2.style.transform = `translateY(${scrollY * -0.7 + 850}px)`;
  img3.style.transform = `translateY(${scrollY * -0.9 + 1400}px)`;
  img4.style.transform = `translateY(${scrollY * -1.1 + 2000}px)`;

  img5.style.transform = `translateY(${scrollY * -1.0 + 2000}px)`;
  img6.style.transform = `translateY(${scrollY * -0.8 + 1900}px)`;
  img7.style.transform = `translateY(${scrollY * -0.9 + 2500}px)`;

  img8.style.transform =  `translateY(${scrollY * -1.0 + 3200}px)`;
  img9.style.transform =  `translateY(${scrollY * -0.8 + 2800}px)`;
  img10.style.transform = `translateY(${scrollY * -0.9 + 3500}px)`;
});

// Scroll to top on window reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
