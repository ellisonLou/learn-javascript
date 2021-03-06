var Promise = function() {
  this.callbacks = []
}

Promise.prototype = {
  constructor: Promise,

  resolve: function(result) {
    this.complete("resolve", result)
  },

  reject: function(result) {
    this.complete("reject", result)
  },

  complete: function(type, result) {
    while (this.callbacks[0]) {
      this.callbacks.shift()[type](result)
    }
  },

  then: function(resolveHandler, rejectHandler) {
    this.callbacks.push({
      'resolve': resolveHandler,
      'reject': rejectHandler 
    })
    return this;
  }
}


var promise = new Promise()

var delay1 = function() {
  setTimeout(function() {
    promise.resolve('数据1')
  }, 1000)
  return promise
}

var callback1 = function(re) {
  re = re + '数据2';
  console.log('re-->', re);
  promise.resolve(re);
}

delay1()
.then (callback1)