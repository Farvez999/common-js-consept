/*
   Truthy:
   1. true
   2. any number (+ve,-ve) will be trurhy othen then 0
   2. any string will be trurhy othen then empty string 
   3. '0'
   4. 'false'
   5. {}
   6. []

   Falsy:
   1. false
   2. 0
   3. '' empty string
   4. undefind
   5. null
*/
const x = 0;
if (x) {
    console.log('X is Truthy');
}
else {
    console.log('x is Falsy')
}

// optational 
// check falsy 
const p = '';
if (!p) {
    console.log('p is palsy')
}
// check truthy 
const q = ' ';
if (!!q) {
    console.log('q is truthy')
}


// What is the output? 
const marks = 60;
const resubmit = -5;
console.log(!(marks > 0 || resubmit > 0));