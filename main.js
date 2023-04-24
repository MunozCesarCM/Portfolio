const about = document.querySelector('#about');
const skill = document.querySelector('#skills');

window.addEventListener('scroll', () => {
  const width = document.body.getBoundingClientRect().width;
  let offsetY = window.scrollY;

  about.style.transform = `translateX(${offsetY * 0.6 - 200}px)`;
  skill.style.transform = `translateX(${(width * 0.6) - offsetY * 0.6 + 200}px)`;
});
