/*!
 *
 * move.css - Library of CSS3 animations
 *
 * @version v1.0.0
 * @link http://ustymukhman.github.io/Move.css/
 * @author Ustym Ukhman <ustym.ukhman@gmail.com>
 * @license MIT License, https://github.com/UstymUkhman/Move.css/blob/master/LICENSE
 *
 * Date: 05-01-2016 12:31:50 AM GMT+0100
 */

@charset "UTF-8";

.move {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.move.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

@-webkit-keyframes rollDownLeft {
  from {
    -webkit-transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: translate3d(-100%, -100%, 0) rotate3d(.1, .75, 0, -90deg);
    transform: translate3d(-100%, -100%, 0) rotate3d(.1, .75, 0, -90deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes rollDownLeft {
  from {
    -webkit-transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: translate3d(-100%, -100%, 0) rotate3d(.1, .75, 0, -90deg);
    transform: translate3d(-100%, -100%, 0) rotate3d(.1, .75, 0, -90deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.rollDownLeft {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: rollDownLeft;
  animation-name: rollDownLeft;
}

@-webkit-keyframes rollDownRight {
  from {
    -webkit-transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: translate3d(100%, -100%, 0) rotate3d(-0.1, .75, 0, -90deg);
    transform: translate3d(100%, -100%, 0) rotate3d(-0.1, .75, 0, -90deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

@keyframes rollDownRight {
  from {
    -webkit-transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    transform: translate3d(0, -200%, 0) rotate3d(0, 1, 0, -180deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: translate3d(100%, -100%, 0) rotate3d(-0.1, .75, 0, -90deg);
    transform: translate3d(100%, -100%, 0) rotate3d(-0.1, .75, 0, -90deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  100% {
    -webkit-transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.rollDownRight {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: rollDownRight;
  animation-name: rollDownRight;
}