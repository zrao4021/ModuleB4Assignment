const array = [
    42,
    true,
    "Hello World",
    {
        name: 'john',
        age: '25',
        isstudent: false,
    },
    false,
    3.14,
    "javascript is fun!"
];

// question number 1. string.

let convertedarray = array.map(String);

console.log( convertedarray);

// question number 2 filter method

let numberss = array.filter(item => typeof item === 'number');

console.log(numberss);

// question number 3 forEach method

array.forEach(element => {
    console.log(typeof element)
});

// question number 4 reduce  method

let sum = array.reduce((acc,current) => {
    if (typeof current === 'number'){
        return acc + current;
    }
     return acc;
},0);
console.log(sum);

// question number 5 find  method

let findd = array.find(element => typeof element === 'boolean')
console.log(findd);

// question number 6 findindex  method

let findind = array.findIndex(element => element === 'object' && element);
console.log(findind)

// question number 7 some  method

let some = array.some(element => typeof element === 'number');

console.log(some);

// question number 8 some  method

let every = array.every(element => typeof element === 'string')

console.log(every);
