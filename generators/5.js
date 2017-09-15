function *foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (var a of foo()) {
  console.log(a);  // 没有 6
}