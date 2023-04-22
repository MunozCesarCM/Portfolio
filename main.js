const about = document.querySelector('#sample');

window.addEventListener('scroll', () => {
  let offsetY = window.scrollY;

  about.style.transform = `translateX(${offsetY * 1.1 - 350}px)`;
});
