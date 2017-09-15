function *foo() {
  yield 1;
  return 2;
}

var it = foo();

console.log( it.next() );
console.log( it.next() );