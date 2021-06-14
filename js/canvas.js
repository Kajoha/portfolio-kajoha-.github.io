import Background from './Background.js';

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const color = '#081329';

const background = new Background(color, canvas, ctx);
const stars = background.createStars(80);

setInterval(() => {
  background.render(stars);
}, 1000);
