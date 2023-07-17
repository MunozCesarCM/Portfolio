window.onload = () => {
  window.scrollTo(0, 0);

  // Prevent scrolling during animation
  const body = document.getElementById('main');
  body.style.display = 'none';
  setTimeout(function() {
    body.style.display = 'block';
  }, 2750 /* miliseconds */);

  const colors = ['#E84545'];
  const colorsSecondary = ['#97e845'];
  let colorIndex = localStorage.getItem('colorIndex');

  if (colorIndex !== null) {
    ++colorIndex;
    colorIndex %= colors.length;
    document.documentElement.style.setProperty('--color-primary', colors[colorIndex]);
    document.documentElement.style.setProperty('--color-secondary', colorsSecondary[colorIndex]);
    localStorage.setItem('colorIndex', colorIndex);
  } else {
    colorIndex = 1;
    document.documentElement.style.setProperty('--color-primary', colors[colorIndex]);
    document.documentElement.style.setProperty('--color-secondary', colorsSecondary[colorIndex]);
    localStorage.setItem('colorIndex', colorIndex);
  }
};
