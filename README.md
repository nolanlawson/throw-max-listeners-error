throw-max-listeners-error
========

[![Build Status](https://travis-ci.org/nolanlawson/throw-max-listeners-error.svg)](https://travis-ci.org/nolanlawson/throw-max-listeners-error)

Throw an error if any [EventEmitter](https://nodejs.org/api/events.html) exceeds its maximum number of listeners for any event. Useful for testing memory leaks.

Usage
---

    $ npm install throw-max-listeners-error --save

```js
require('throw-max-listeners-error');
```

Description
----

Have you ever seen this error in a Node module before?


    (node) warning: possible EventEmitter memory leak detected.
      11 listeners added. Use emitter.setMaxListeners() to increase limit.
    
Okay, that's pretty cool! It's nice to get a warning when we've got too many listeners.

But for testing purposes, wouldn't it be better if it just threw an error? Then you could actually guarantee in your tests that the number of max listeners was never reached.

That's exactly what this thing does. Just `require()` it and you're done; every EventEmitter will throw an error if its max number of listeners is reached.
