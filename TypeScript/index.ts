

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

arr.push()
arr.push(23)
arr.push('push')

//array with types

const arr1 : Number[] = []

arr1.push(23)
arr1.push('string') //can't push a string on a number array

//array of object

const objectarray: employee[] = [] //array of employee object we created above

//tuple array

type List = [number, string, boolean] //fixed length array which every array has it's own type ()

const arr2: List = [] //error because this array should be defined upfront

type List2 = [number?, string?, boolean?] // you can make an array optional by putting a question mark

// Generics

class Observable<T>{
    constructor(public value: T){}

}

let obs : Observable<employee>;

let obs1 : Observable<number>;

let obs2 : new Observable(23)

