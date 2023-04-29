const about = document.querySelector('#about');
const skill = document.querySelector('#skills');
const scroll = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
  const width = document.body.getBoundingClientRect().width;
  let offsetY = window.scrollY;

  about.style.transform = `translateX(${offsetY * 0.6 - 200}px)`;
  skill.style.transform = `translateX(${width - offsetY * 0.6}px)`;
  scroll.style.opacity = 1.25 - offsetY / 450;
});

// Scroll to top on window reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
