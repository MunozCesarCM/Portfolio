window.onload = () => {
  window.scrollTo(0, 0);

  // Prevent scrolling during animation
  const body = document.getElementById('main');
  body.style.display = 'none';
  setTimeout(function() {
    body.style.display = 'block';
  }, 2750 /* miliseconds */);
};

const backgroundBox = document.querySelector('.background-box');
const colorBox = document.getElementById('color-box');

window.addEventListener('scroll', () => {
  if (window.pageYOffset <= 5) {
    colorBox.style.marginTop = '0';
    colorBox.classList.remove('color-box-full');
    colorBox.classList.remove('splash-animation');
  } else if (window.pageYOffset > 5 && window.pageYOffset < window.innerHeight) {
    colorBox.style.marginTop = window.pageYOffset + 'px';
    colorBox.classList.add('color-box-full');
  } else if (window.pageYOffset >= window.innerHeight) {
    colorBox.style.marginTop = '100vh';
  }
});
