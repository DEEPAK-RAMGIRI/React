// js is a high level interpreted oop language
// js is a light weighted language
// js is a browser language
// react.js is faster beacause of virtall DOM
// VAR ES5
// LET ES6
//CONST ES6

// arrow  also an ES6 version
// two types of data types -> premitive and non - premmitive 
// premitive string, number ,boolean ,Null,undefined ,symbol,bigint
// non-premitive

// var temp = 10;
// console.log(temp);

// let b = 20;
// console.log(b);

// const c = 30;
// console.log(c);


// var is ES5
// var a = 20;
console.log(a) //20
// functional scope
if(true){
    var a = 10;
    console.log(a); // 10
}
console.log(a); // 10


// block scope
if (true){
    let b = 20;
    console.log(b); // give 20
    b = 90;
    console.log(b);
}

// console.log(b);// give error



// block scope
if (true){
    const c = 30;
    console.log(c);
}
// console.log(c);





// Map,filter,reduce
const no = [1,2,3,4,5];
console.log("original array",no);

const double = no.map(no => no * 2);
console.log("map Function",double);

const even = no.filter(no =>no%2 === 0);
console.log("filter even",even);

const odd = no.filter(no => no%2 === 1);
console.log("filter odd",odd);

const sums = no.reduce((no,i) =>  i+no);
console.log(sums);

// Transform into Array Function
const Demo = () => {console.log("This is array function");}
// Demo()

const reverseString = (string) => { return string.split('').reverse().join('');}
console.log(reverseString("deepak"))

