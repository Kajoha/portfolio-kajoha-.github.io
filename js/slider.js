const box = document.querySelectorAll('.slider__box');
const dots = document.querySelectorAll('.dot');
let position = 0;

for (let i = 0; i < box.length; i += 1) {
  box[i].classList.add('js-content-hidden');
}

box[0].classList.remove('js-content-hidden');

function changeBox2(right, index = null) {
  for (let i = 0; i < box.length; i += 1) {
    box[i].classList.add('js-content-hidden');
    dots[i].classList.remove('slider__dot--active');
  }
  if (index) {
    position = index;
  } else if (right) {
    if (position < 2) {
      position += 1;
    } else {
      position = 0;
    }
  } else if (position === 0) {
    position = 2;
  } else {
    position -= 1;
  }
  box[position].classList.remove('js-content-hidden');
  dots[position].classList.add('slider__dot--active');
}

function changeBox() {
  for (let i = 0; i < box.length; i += 1) {
    box[i].classList.add('js-content-hidden');
    dots[i].classList.remove('slider__dot--active');
  }
  if (position < 2) {
    position += 1;
  } else {
    position = 0;
  }
  box[position].classList.remove('js-content-hidden');
  dots[position].classList.add('slider__dot--active');
}

function changeBoxByDot(index, obj) {
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove('slider__dot--active');
  }
  obj.classList.add('slider__dot--active');
  changeBox2(null, index);
}

window.setInterval(changeBox, 20000);
