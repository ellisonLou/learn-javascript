const square = require('./square.js');

const mySquare = square(2);

console.log(`The area of my square is ${mySquare.area()}`);

console.log('require.main: ', require.main);