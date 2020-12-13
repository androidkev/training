

// #1

console.log('Hellow World!!');

// #2

async function hello(){
    return 'world'
}

//implicit

let lucky = 23

//explicit

let explicit: number;

//custome types

type Style = 'bold' | 'italic';
 
let x: Style;

//strong typing objects

const employee1 = {
    id: '123456',
    name: 'Kevyn',
    age: 25
}

const employee2 = {
    id: '123456',
    name: 'Fredie',
    age: 23
}

//enforcing shape of objects

interface employee {
    id: number,
    name: string,
    age: number
    [key: string]: any // you can put any additional property
}

//functions

//args has implicit any type
function pow(x,y) {
    return Math.pow(x,y)
}

//arguments are anotated
function pow1(x:number,y:number) {
    return Math.pow(x,y)
}

//function has return value type

function pow2(x:number,y:number) : string {
    return Math.pow(x,y) //but it has error because it returns a number
}

function pow3(x:number,y:number) : string {
    return Math.pow(x,y).toString() //returns a string value
}

//Arrays

const arr = []