// what would be the output?

let p = 'Javascript';
let q = p;
p = 'React';
// console.log(q);

// What will be the output (be careful. And think about it)? 

const isTrue = 'false';
if (!isTrue) {
    console.log('hello');
} else {
    console.log('world');
}


// What will be the value of the result? 

function sum(p, q) {
    p + q;
}
const result = sum(2, 3);
// console.log(result);

// What would be the output from the code below?

if ("2" === 2) {
    console.log("Inside if");
} else {
    console.log("Inside else");
}


// What would be the output from the function below?

// function work(x, y = 4) {
//     return x + y;
// }
// console.log(work(32)

// What is the output? 
const marks = 60;
const resubmit = -5;
console.log(!(marks > 0 || resubmit > 0));

const person = { name: "hero", id: 101, address: "BD", postalCode: 40321 };
console.log(Object.keys.length)
console.log(Object.keys(person).length)


// How will you find out the numbers of properties present in an object person?


const animals = ['cat', 'dog', 'rat'];
console.log(animals.includes('Cat'));

// What will be the output?

const unique = array => array.indexOf('21')

array = [2, 3, 4, 5, 2]

// If you call the unique function and pass the array what will you get?

const add = (para1, para2) => para2 + para1
// What will be the 
// return of add('2',3)

// const b=6 , b=6
//     console.log(b);
// If you run the above code, which 
// type of error will you get?

const colors = { mango: 'green', grapes: 'black', organe: 'yellow' };
console.log(colors[grapes])