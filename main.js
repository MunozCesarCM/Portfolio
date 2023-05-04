const about = document.querySelector('#about');
const skill = document.querySelector('#skills');
const scroll = document.querySelector('.scroll');

const containers = document.querySelectorAll('.screenshots')
const config = [
  { pos: 15, speed: 13, },
  { pos: 35, speed: 10, },
  { pos: 70, speed: 15, },
  { pos: 00, speed: 09, },
];

window.addEventListener('scroll', () => {
  const width = document.body.getBoundingClientRect().width;
  const offsetY = window.scrollY;
  const skillPos = skill.getBoundingClientRect().bottom;

  about.style.transform = `translateX(${offsetY * 0.6 - 200}px)`;
  skill.style.transform = `translateX(${skillPos - (width * 0.1)}px)`;
  scroll.style.opacity = 1.25 - offsetY / 450;

  containers.forEach((container) => {
    const top = container.getBoundingClientRect().top;
    const images = container.querySelectorAll('img');
    const height = container.offsetHeight;

    images.forEach((image, index) => {
      const { pos, speed } = config[index];
      const position = top * (speed / 10) - (height * pos / 100) - 200;
      image.style.transform = `translateY(${position}px)`;
    })
  });
});

// Scroll to top on window reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
