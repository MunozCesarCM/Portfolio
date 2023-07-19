window.onload = () => {
  window.scroll(0, 0);
};

const colorBox = document.getElementById('color-box');
const about = document.getElementById('screen-spacer');
const nameTop = document.getElementById('nameTop');
const nameBot = document.getElementById('nameBot');

const headerSvgs = document.getElementsByTagName('svg');

const headerHeight = 5; // Height when the box becomes full

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  // Calculate the target margin for the colorBox element
  const targetMargin = Math.min(scrollPosition, 300 - headerHeight);

  colorBox.style.marginTop = `${targetMargin}px`;
  about.style.paddingTop = `${targetMargin}px`;

  // Add or remove classes based on the scroll position
  if (scrollPosition === 0) {
    colorBox.classList.add('color-box-semi');
    colorBox.classList.remove('color-box-full');

    about.classList.add('fade-out');
    about.classList.remove('fade-in');

    nameTop.classList.add('transform-black');
    nameBot.classList.add('transform-black');

    nameTop.classList.remove('transform-white');
    nameBot.classList.remove('transform-white');

    for (const headerSvg of headerSvgs) {
      headerSvg.classList.add('slide-in');
      headerSvg.classList.remove('slide-out');
    }

  } else if (scrollPosition < 200) {
    colorBox.classList.add('color-box-full');
    colorBox.classList.remove('color-box-semi');

    about.classList.add('fade-in');
    about.classList.remove('fade-out');

    nameTop.classList.add('transform-white');
    nameBot.classList.add('transform-white');

    nameTop.classList.remove('transform-black');
    nameBot.classList.remove('transform-black');

    for (const headerSvg of headerSvgs) {
      headerSvg.classList.add('slide-out');
      headerSvg.classList.remove('slide-in');
    }

  } else {
    colorBox.classList.add('splash-animation');
  }
});
