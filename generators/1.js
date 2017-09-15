function *getAllSquareNumbers() {
  for(var i=1; ;i++) {
    yield i * i;
    if (i === 3) {
      return  //done will be true
    }
  }
}

var generator = getAllSquareNumbers();
console.log('what will next return: ', generator.next())
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);