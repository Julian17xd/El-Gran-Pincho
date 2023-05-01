var sliderIndex = 0;
var sliderTimer = null;

function moveSlider(n) {
  sliderIndex += n;
  var sliderWrapper = document.querySelector('.slider-wrapper');
  if (sliderIndex >= sliderWrapper.children.length) {
    sliderIndex = 0;
  } else if (sliderIndex < 0) {
    sliderIndex = sliderWrapper.children.length - 1;
  }
  var distance = -sliderIndex * 100 / sliderWrapper.children.length;
  sliderWrapper.style.transform = 'translateX(' + distance + '%)';
}

function startSlider() {
  sliderTimer = setInterval(function() {
    moveSlider(1);
  }, 5000);
}

function stopSlider() {
  clearInterval(sliderTimer);
}

startSlider();

document.querySelector('.slider-container').addEventListener('mouseover', function() {
  stopSlider();
});

document.querySelector('.slider-container').addEventListener('mouseout', function() {
  startSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function() {
  moveSlider(-1);
});

document.querySelector('.slider-next').addEventListener('click', function() {
  moveSlider(1);
});

window.addEventListener('resize', function() {
  var sliderWrapper = document.querySelector('.slider-wrapper');
  var sliderIndexRatio = sliderIndex / sliderWrapper.children.length;
  var newSliderIndex = Math.round(sliderIndexRatio * sliderWrapper.children.length);
  moveSlider(newSliderIndex - sliderIndex);
});

