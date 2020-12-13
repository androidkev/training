console.log('Hello world')

//these are primitive types

console.log(typeof 23) //number
console.log(typeof "oof") //string
console.log(typeof null) //null

//these are Objects

console.log(typeof {}) //object
console.log(typeof []) //object
console.log (typeof function(){}) //function

//Truthy vs Falsy

console.log(true) // true
console.log(!! "hello")// true
console.log(!! -1) // true
console.log(!! []) // true
!! {}; // true

console.log(false) // false
console.log(!! null) // false
console.log(!! undefined) // false
console.log(!! 0) // false
console.log(!! "") // false

//hoisting

fun();

function fun(){}

function outer(){
    let count=0;

    function inner(){
        count++
        return count;
    }
    return inner;
}

const addOne = outer();

console.log(addOne())
console.log(addOne())
console.log(addOne())

//functions


//hoisted function declaration
console.log(makeBread(2))

function makeBread(qty){
    return 'BBBREEEAD \n'.repeat(qty)
}

//function as value or expression


const makeBeer = function(qty){
    return 'BEER \n'.repeat(qty)
}

console.log(makeBeer(2))

//positional
function makeDinner (main, side, drink){
    console.log(arguments)
    return `Dinner is ${main}, ${side}, and ${drink}.`
}

makeDinner('chicken', 'rice', 'coke')

//Named
function meryenda(stuff){
    const { pagkain, inumin, lugar } = stuff;
    console.log(arguments)
    return `Ang meryenda ay ${pagkain}, ${inumin}, ${lugar}`
}

meryenda( 'turon','tubig','bahay')

//Rest params

function restparam(main, ...args){
    console.log(main, args)
    return `Restparams includes ${main} and ${args.join('')}.`;
}

//arrow functions

const ex = (qty) => 'EXX'.repeat(qty)

console.log(ex(2))

const pure = (x) => x ** 2;

console.log(pure(4))

//Higher Order Functions

//Anonymous

setTimeout( () => console.log('Hello!'), 2000 )

//Named

const log = () => console.log('hello');
setTimeout(log, 2000);

//Array Map
[1,2,3,4].map( (v) => console.log(v ** 2), 2000)

//recursive

const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {

    const subfolders = fs.statSync(dir).isDirectory() 
                       && fs.readdirSync(dir);

    if (subfolders) {

        console.log('👟👟👟 Traversing ', dir);

        subfolders.forEach(path => {
            const fullPath = join(dir, path);

            traverse( fullPath );

            
        });
    }

}

traverse( process.cwd() );