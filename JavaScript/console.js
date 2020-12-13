console.log( console )

bar = 24
foo = 23

console.log(bar, foo);

// Wait, which variable is named foo? 

console.log({ foo, bar });

// Better, but it's kinda hard to read...

console.table({ foo, bar });

// Noice!

console.group();

console.log(1);
console.log(2);
console.log(3);

console.groupEnd();

loggedIn = 1

// verbose
if (loggedIn) {
    console.error('user is logged in assertion failed');
}

// much better 😍 
console.assert(loggedIn, 'user is logged in');

console.count();
console.count();
console.count();

console.countReset();

console.time();

// do stuff

console.timeLog('did stuff');


// do more stuff

console.timeLog('did more stuff');

console.timeEnd()

console.log('%c YOUR_MESSAGE', 'color: blue; background-color: yellow;')