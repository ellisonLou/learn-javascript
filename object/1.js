var o = {};
var bValue = 38;
Object.defineProperty(o, 'b', {
  get: function() { 
    console.log('get property on o');
    return bValue 
  },
  set: function( newVal ) { return bValue = newVal },
  // value: 100
})
console.log(o)
console.log(o.b)

o.b = 12;

console.log('o.b 2: ', o.b);