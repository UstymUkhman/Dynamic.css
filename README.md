# [Dynamic.css](https://ustymukhman.github.io/Dynamic.css/public/) #

*Awesome Library of CSS3 animations*

[![Dynamic.css build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/UstymUkhman/Dynamic.css/blob/master/dist/dynamic.css)
[![Dynamic.css release](https://img.shields.io/badge/release-v1.0.0-brightgreen.svg)](https://github.com/UstymUkhman/Dynamic.css/)
[![Bower version](https://img.shields.io/badge/bower-v1.0.0-blue.svg)](http://bower.io/)
[![GitHub license](https://img.shields.io/cocoapods/l/AFNetworking.svg)](https://github.com/UstymUkhman/Dynamic.css/blob/master/LICENSE)

Special thanks to daneden's [Animate.css](https://github.com/daneden/animate.css) and Christian's [magic](https://github.com/miniMAC/magic) for inspiration.<br>
You're amazing, guys! :+1:

**Dynamic.css** is a bunch of awesome, cross-browser CSS animations to use in any project.<br>
It's perfect to animate incoming and leaving web page elements, but it also could be useful for sliders, `:hover` handlers and all kind of general use.

You can try it at this [demo page](https://ustymukhman.github.io/Dynamic.css/public/).

![](./public/preview.gif)

## Download

You can download it from [Bower](http://gruntjs.com/getting-started/)

`````sh
bower install UstymUkhman/Dynamic.css
`````

[GitHub](https://github.com/UstymUkhman/Dynamic.css)

`````sh
git clone https://github.com/UstymUkhman/Dynamic.css.git
`````

or [here](https://ustymukhman.github.io/Dynamic.css/DynamicCSS.zip).

Then just load the script file in your application:

```html
<script type="text/javascript" src="bower_components/Dynamic.css/dist/dynamic.css"></script>
```

## Usage

1. Include the stylesheet in your document's `<head>`

  ```html
  <head>
    <link rel="stylesheet" href="path/to/dynamic.css">
    
    <!-- Or, for the minified version: -->
    <link rel="stylesheet" href="path/to/dynamic.min.css">
  </head>
  ```

2. Add class `dynamic` to the element you want to animate.<br>
 You may also want to include the class `infinite` for an infinite loop.<br><br>

3. Than you'll also have to add one of the following classes:

  * `jump`
  * `blink`
  * `fitIn`
  * `fitOut`
  * `windyX`
  * `windyY`
  * `spinXUp`
  * `spinXDown`
  * `spinYLeft`
  * `spinYRight`
  * `spinZIn`
  * `spinZOut`
  * `materialize`
  * `vaporize`<br><br>
  * `starWars`
  * `starWarsFrontUp`
  * `starWarsFrontDown`
  * `starWarsBackUp`
  * `starWarsBackDown`<br><br>
  * `comeInLeft`
  * `comeInUp`
  * `comeInDown`
  * `comeInRight`
  * `comeOutLeft`
  * `comeOutUp`
  * `comeOutDown`
  * `comeOutRight`<br><br>
  * `speedInLeft`
  * `speedInRight`
  * `speedOutLeft`
  * `speedOutRight`<br><br>
  * `stairsInLeft`
  * `stairsIn`
  * `stairsInRight`
  * `stairsOutLeft`
  * `stairsOut`
  * `stairsOutRight`<br><br>
  * `hopInLeft`
  * `hopIn`
  * `hopInRight`
  * `hopOutLeft`
  * `hopOut`
  * `hopOutRight`<br><br>
  * `rollInLeft`
  * `rollInRight`
  * `rollOutLeft`
  * `rollOutRight`<br><br>
  * `rollUpLeft`
  * `rollUpDown`
  * `rollUpRight`
  * `rollDownLeft`
  * `rollDownUp`
  * `rollDownRight`<br><br>
  * `fallDownIn`
  * `fallDownOut`
  * `fallDownLeft`
  * `fallDownUp`
  * `fallDownRight`<br><br>
  * `roundOutLeft`
  * `roundOutRight`
  * `roundSlideLeft`
  * `roundSlideRight`<br><br>

Once you've decided the animation to run, you have to add the corresponding CSS class via JavaScript (or jQuery) like this:

`````javascript
$('#elementToAnimate').addClass('dynamic jump');
`````

The default animation time for most *Dynamic.css* animations is `2 seconds`. Though, if you're not OK with that, you can overwrite the animation duration of the main class like this:

`````css
.dynamic {
  -webkit-animation-duration: 2.5s;
  animation-duration: 2.5s;
}
`````

However, if you don't like the default duration time of a particular animation class, you can simply overwrite relative CSS rules of the animation you'd like to change:

`````css
.dynamic.fitOut {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
}
`````

In this way you can also add delays for specific animations:

`````css
.dynamic.vaporize {
  -webkit-animation-delay: .5s;
  animation-delay: .5s;
}
`````

Certain thing, you can also use jQuery to detect when the animation is finished to make some other stuff in the callback function:

`````javascript
$('#animatedElement').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  function() {
    // ...make some other stuff in the callback function.
});
`````

## Extend Dynamic.css

`Dynamic.css` is powered by [grunt](http://gruntjs.com/), so you can easily extend the library and create custom builds.<br>
First of all, you’ll need Grunt and other dependencies:

`````sh
$ cd path/to/Dynamic.css/

# If you haven't install NPM globaly, run:
$ sudo npm install

$ sudo npm install grunt --save-dev
$ sudo npm install grunt-contrib-grunt-contrib-concat --save-dev

$ sudo npm install grunt-contrib-grunt-contrib-uglify --save-dev
# Actualy, grunt doesn't minify well CSS files, so you can omit this one,
# but in that case you'll have to minify builded file manualy.
`````

Once you've configured `Gruntfile.js`, as described [here](http://gruntjs.com/getting-started#the-gruntfile), go back to your terminal and run `grunt` in the project's folder to compile your custom builds.<br>
The easiest way to update the library, is to add your new animations in the `dist.src` array of paths.


`````javascript
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  concat: {
    options: {
      separator: '\n\n',
      banner: mainDesc
    },

    dist: {
      src: [
        'animations/base.css',
        'animations/specials/*.css',
        'animations/star wars/*.css',
        'animations/incomers & leavers/*.css',
        'animations/speedy/*.css',
        'animations/stairs/*.css',
        'animations/jumpers/*.css',
        'animations/rollers/*.css',
        'animations/fallers/*.css',
        'animations/turners/*.css'
        // paths/to/your/files
      ],
      dest: '<%= pkg.filename %>.css'
    }
  }
});
`````

But the most important thing is: **have fun like I did!** :blush:

## License
Dynamic.css is licensed under the [MIT license](http://opensource.org/licenses/MIT).
