import Typed from 'typed.js'

export const typed = (elementClass, options) => {
  return new Typed(elementClass, {
    strings: options.strings || [''],
    typeSpeed: options.typeSpeed || 40,
    startDelay: options.startDelay || 0,
    fadeOut: options.fadeOut || false,
    showCursor: options.showCursor || true,
    onBegin: options.onBegin || function() {},
    onComplete: options.onComplete || function() {},
    onStart: options.onStart || function() {},
    onDestroy: options.onDestroy || function() {},
  })
}
