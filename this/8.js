function foo(arg1, arg2) {
    console.log('arg1--->', arg1);
    console.log('arg2--->', arg2);
}

var c = foo.bind({hello: 'world'}, 'me', 'she');
c();
