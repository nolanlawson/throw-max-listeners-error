var assert = require('assert');

require('./index.js');

var events = require('events');
var eventEmitter = new events.EventEmitter();

// Should throw an error when we go over the maxListeners
eventEmitter.setMaxListeners(10);
assert.throws(function(){
  for(var i = 0; i <= 10; i++){
    eventEmitter.on('test', function(){});
  }
}, Error);

// Should not throw an error if maxListeners are set to 0
eventEmitter.setMaxListeners(0);
assert.doesNotThrow(function(){
  eventEmitter.on('test', function(){});
}, Error);
