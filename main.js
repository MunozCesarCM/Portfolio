window.onload = () => {
  window.scrollTo(0, 0);

  // Prevent scrolling during animation
  const body = document.getElementById('main');
  body.style.display = 'none';
  setTimeout(function() {
    body.style.display = 'block';
  }, 3000 /* miliseconds */);

  const colors = ['#E71D36', '#FFC300', '#8AC926', '#3A86FF'];
  let colorIndex = localStorage.getItem('colorIndex');

  if (colorIndex !== null) {
    ++colorIndex;
    colorIndex %= colors.length;
    document.documentElement.style.setProperty('--color-primary', colors[colorIndex]);
    localStorage.setItem('colorIndex', colorIndex);
  } else {
    colorIndex = Math.floor(Math.random() * colors.length);
    document.documentElement.style.setProperty('--color-primary', colors[colorIndex]);
    localStorage.setItem('colorIndex', colorIndex);
  }
};
