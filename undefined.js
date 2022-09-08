// 8 ways to get undefined

// 1. variable that is not initialized undefined
let first;
console.log(first)

// 2. function with no return
function second(a, b) {
    const total = a + b;
}

const result = second();

// 3. Paremetter that is not pass will be undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(4, 5);
