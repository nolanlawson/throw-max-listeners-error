'use strict';

var EE = require('events').EventEmitter;
var originalAddListener = EE.prototype.addListener;

function newAddListener(type, listener) {
  /* jshint validthis:true */
  originalAddListener.apply(this, arguments);
  var numListeners = this.listeners(type).length;
  var max = typeof this._maxListeners === 'number' ? this._maxListeners : 10;
  if (max !== 0 && numListeners > max) {
    var error = new Error('too many listeners of type "' + type +
      '" added to EventEmitter. Max is ' + max +
      ' and we\'ve added ' + numListeners + '.');
    console.error(error);
    throw error;
  }
  return this;
}

EE.prototype.addListener = EE.prototype.on = newAddListener;
