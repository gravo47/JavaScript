function fizzBuzz(x) {
    if (typeof x !== 'number') return x;
    if (x % 3 === 0  && x % 5 ===0) {
        return 'FizzBuzz'
    } else if (x % 3 === 0){
        return 'Fizz'
    } else if (x % 5 === 0){
        return'Buzz'
    } else {
        return x;
    }
};

console.log('i', fizzBuzz('i'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
};