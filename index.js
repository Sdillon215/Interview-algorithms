const Benchmark = require('benchmark');
const { mostDuplicates, optimizedDuplicates } = require('./dupes');

const numbers = [];
for (let i = 0; i < 10000; i++) {
    numbers.push(Math.floor(Math.random() * 10000) + 1);
}

const suite = new Benchmark.Suite;

suite
    .add('duplicates test', function () {
        mostDuplicates(numbers);
        optimizedDuplicates(numbers);
    })
    .add('optimized duplicates test', function () {
        optimizedDuplicates(numbers);
    })
    .on('complete', function () {
        this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean * 1000} milliseconds.`));
    })
    .run();


    // Password checker for capitol letter lowercase letter punctuation char at least 7 char less than 31
// var regex = /^[a-zA-Z0-9!\%\*\/\)\(+=._,?-]{7,31}$/g

//     function test (str) {
//         if (!regex.test(str)) {
//             console.log('false');
//         }
//         else if (str.toLowerCase() === 'password' ) {
//             console.log('password false');
//         } else {
//             console.log('true');
//         }
//     }
    
//     test('hhhhhhhhhh*hhhhhhhhhhhhhhhhhhh');