'use strict';

(function () {
  var element;

  function onButtonClick (event) {
    var animation = event.target.dataset.animation;
    element.className = 'dynamic ' + animation;
  }

  function onAnimationEnd () {
    setTimeout(() => {
      element.className = 'dynamic';
    }, 250);
  }

  window.addEventListener('DOMContentLoaded', function () {
    var buttons = document.getElementsByClassName('animation-button');
        element = document.getElementById('animated-element');

    for (var b = 0; b < buttons.length; b++) {
      buttons[b].addEventListener('click', onButtonClick);
    }

    element.addEventListener('webkitAnimationEnd', onAnimationEnd);
    element.addEventListener('mozAnimationEnd', onAnimationEnd);
    element.addEventListener('MSAnimationEnd', onAnimationEnd);
    element.addEventListener('oanimationend', onAnimationEnd);
    element.addEventListener('animationend', onAnimationEnd);
  });
})();
