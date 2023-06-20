const body = document.querySelector('html');
const yellow_circle = document.querySelector('#yellow-circle');
const black_circle = document.querySelector('#black-circle');
const black_outline = document.querySelector('#black-outline');

const onScroll = () => {
  if (window.pageYOffset === 0) {
    yellow_circle.style.transform = `translateX(0px) translateY(0px)`;
    yellow_circle.style.width = `80vw`;
    yellow_circle.style.height = `80vw`;

    black_circle.style.transform = `translateX(0px) translateY(0px)`;
    black_circle.style.top = '33vw';
    black_circle.style.right = '70vw';
    black_circle.style.width = `50vw`;
    black_circle.style.height = `50vw`;
    black_circle.style.backgroundColor = '#2F2F2F';

    black_outline.style.transform = `translateX(0px) translateY(0px)`;
    black_outline.style.top = '40vw';
    black_outline.style.right = '45vw';
    black_outline.style.width = `60vw`;
    black_outline.style.height = `60vw`;
    black_outline.style.borderColor = '#2F2F2F';

    body.style.backgroundColor = '#FFFFFF';
  }
  if (window.pageYOffset > (window.innerHeight - 10)) {
    yellow_circle.style.transform = `translateX(-58vw) translateY(-50vw)`;
    yellow_circle.style.width = `120vw`;
    yellow_circle.style.height = `120vw`;

    black_circle.style.transform = `translateX(46vw) translateY(5vw)`;
    black_circle.style.top = '33vw';
    black_circle.style.right = '70vw';
    black_circle.style.width = `50vw`;
    black_circle.style.height = `50vw`;
    black_circle.style.backgroundColor = '#2F2F2F';

    black_outline.style.transform = `translateX(13vw) translateY(3vw)`;
    black_outline.style.top = '40vw';
    black_outline.style.right = '45vw';
    black_outline.style.width = `60vw`;
    black_outline.style.height = `60vw`;
    black_outline.style.borderColor = '#2F2F2F';

    body.style.backgroundColor = '#FFFFFF';
  }
  if (window.pageYOffset > (window.innerHeight * 2 - 10)) {
    yellow_circle.style.transform = `translateX(0vw) translateY(-100vw)`;
    yellow_circle.style.width = `20vw`;
    yellow_circle.style.height = `20vw`;

    black_circle.style.transform = `translateX(0vw) translateY(0vw)`;
    black_circle.style.top = '-4vw';
    black_circle.style.right = '45vw';
    black_circle.style.width = `10vw`;
    black_circle.style.height = `10vw`;
    black_circle.style.backgroundColor = '#FFFFFF';

    black_outline.style.transform = `translateX(0vw) translateY(0vw)`;
    black_outline.style.top = '-40vw';
    black_outline.style.right = '5vw';
    black_outline.style.width = `90vw`;
    black_outline.style.height = `90vw`;
    black_outline.style.borderColor = '#FFFFFF';

    body.style.backgroundColor = '#007FFF';
  }
};

window.addEventListener('scroll', onScroll);
