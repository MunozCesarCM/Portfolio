function scrollToTop() {
  window.scrollTo(0, 0);
}

const body = document.querySelector('html');
const title = document.querySelector('#title');
const title_circle_hide = document.querySelector('#title-circle-hide');
const title_circle_show = document.querySelector('#title-circle-show');

const yellow_circle = document.querySelector('#yellow-circle');
const black_circle = document.querySelector('#black-circle');
const black_outline = document.querySelector('#black-outline');

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

const onScroll = () => {
  if (window.pageYOffset === 0) {
    yellow_circle.style.top = '-75vh';
    yellow_circle.style.left = '50vw';
    yellow_circle.style.width = `80vw`;
    yellow_circle.style.height = `80vw`;

    black_circle.style.top = '70vh';
    black_circle.style.right = '75vw';
    black_circle.style.width = `50vw`;
    black_circle.style.height = `50vw`;
    black_circle.style.backgroundColor = '#2F2F2F';

    black_outline.style.top = '65vh';
    black_outline.style.right = '50vw';
    black_outline.style.width = `60vw`;
    black_outline.style.height = `60vw`;
    black_outline.style.borderColor = '#2F2F2F';

    section1.style.opacity = '1';
    section2.style.opacity = '0';
    section3.style.opacity = '0';
    section4.style.opacity = '0';

    body.style.backgroundColor = '#FFFFFF';
    title.style.fontSize = '1.5em';
    title_circle_hide.style.fontSize = '1em';
    title_circle_show.style.marginRight = '0';
    title_circle_show.style.color = '#000000';
    title_circle_show.style.fontSize = '1em';
  }
  if (window.pageYOffset > (window.innerHeight - 10)) {
    yellow_circle.style.top = '-90vw';
    yellow_circle.style.left = '-10vw';
    yellow_circle.style.width = `120vw`;
    yellow_circle.style.height = `120vw`;

    black_circle.style.top = '80vh';
    black_circle.style.right = '25vw';
    black_circle.style.width = `50vw`;
    black_circle.style.height = `50vw`;
    black_circle.style.backgroundColor = '#2F2F2F';

    black_outline.style.top = '85vh';
    black_outline.style.right = '35vw';
    black_outline.style.width = `60vw`;
    black_outline.style.height = `60vw`;
    black_outline.style.borderColor = '#2F2F2F';

    section1.style.opacity = '0';
    section2.style.opacity = '1';
    section3.style.opacity = '0';
    section4.style.opacity = '0';

    body.style.backgroundColor = '#FFFFFF';
    title.style.fontSize = '0em';
    title_circle_hide.style.fontSize = '0em';
    title_circle_show.style.marginRight = '2em';
    title_circle_show.style.color = '#000000';
    title_circle_show.style.fontSize = '1.5em';
  }
  if (window.pageYOffset > (window.innerHeight * 2 - 10)) {
    yellow_circle.style.width = `20vw`;
    yellow_circle.style.height = `20vw`;

    black_circle.style.top = '-12.5vw';
    black_circle.style.right = '40vw';
    black_circle.style.width = `20vw`;
    black_circle.style.height = `20vw`;
    black_circle.style.backgroundColor = '#FFFFFF';

    black_outline.style.top = '-40vw';
    black_outline.style.right = '5vw';
    black_outline.style.width = `90vw`;
    black_outline.style.height = `90vw`;
    black_outline.style.borderColor = '#FFFFFF';

    section1.style.opacity = '0';
    section2.style.opacity = '0';
    section3.style.opacity = '1';
    section4.style.opacity = '0';

    body.style.backgroundColor = '#007FFF';
    title.style.fontSize = '0em';
    title_circle_hide.style.fontSize = '0em';
    title_circle_show.style.marginRight = '2em';
    title_circle_show.style.color = '#E50072';
    title_circle_show.style.fontSize = '1.5em';
  }
  if (window.pageYOffset > (window.innerHeight * 3 - 10)) {
    yellow_circle.style.width = `20vw`;
    yellow_circle.style.height = `20vw`;

    black_circle.style.top = '-12.5vw';
    black_circle.style.right = '40vw';
    black_circle.style.width = `20vw`;
    black_circle.style.height = `20vw`;
    black_circle.style.backgroundColor = '#FEBD6A';


    black_outline.style.top = '-40vw';
    black_outline.style.right = '5vw';
    black_outline.style.width = `90vw`;
    black_outline.style.height = `90vw`;
    black_outline.style.borderColor = '#FEBD6A';

    section1.style.opacity = '0';
    section2.style.opacity = '0';
    section3.style.opacity = '0';
    section4.style.opacity = '1';

    body.style.backgroundColor = '#232F3E';
    title.style.fontSize = '0em';
    title_circle_hide.style.fontSize = '0em';
    title_circle_show.style.marginRight = '2em';
    title_circle_show.style.color = '#232F3E';
    title_circle_show.style.fontSize = '1.5em';
  }
};

window.addEventListener('scroll', onScroll);

// Color dev icons on hover
// ========================

// Get all the elements in the skills section
const skillsSection = document.getElementById('skills');
const skillElements = skillsSection.getElementsByTagName('i');
const skillDisplay = document.getElementById('skill-display');

// Add event listeners to each skill element
Array.from(skillElements).forEach((skillElement) => {
  skillElement.addEventListener('mouseenter', addColoredClass);
  skillElement.addEventListener('mouseleave', removeColoredClass);
});

// Function to add the 'colored' class
function addColoredClass(event) {
  event.target.classList.add('colored');

  const iconType = event.srcElement.className.match(/-(.*?)-/);
  skillDisplay.textContent = iconType[0].slice(1, -1);
}

// Function to remove the 'colored' class
function removeColoredClass(event) {
  event.target.classList.remove('colored');
  skillDisplay.textContent = '';
}

