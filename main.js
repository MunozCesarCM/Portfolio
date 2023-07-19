const colorBox = document.getElementById('color-box');
const headerHeight = 5; // Height when the box becomes full

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  // Calculate the target margin for the colorBox element
  const targetMargin = Math.min(scrollPosition, window.innerHeight - headerHeight);

  colorBox.style.marginTop = `${targetMargin}px`;

  // Add or remove classes based on the scroll position
  if (scrollPosition === 0) {
    colorBox.classList.add('color-box-semi');
    colorBox.classList.remove('color-box-full');
  } else if (scrollPosition < window.innerHeight) {
    colorBox.classList.add('color-box-full');
    colorBox.classList.remove('color-box-semi');
  } else {
    colorBox.classList.add('splash-animation');
  }
});
