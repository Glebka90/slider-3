let image = document.querySelectorAll('.slider__img');
let curent = 0;

function slider() {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.add('slider_opacity');
  }

  image[curent].classList.remove('slider_opacity');

  if (curent + 1 == image.length) {
    curent = 0;
  } else {
    curent++;
  }
}

document.querySelector('.slider').onclick = slider;
console.log(slider);