const numero = -9;
console.log(`O número escolhido é ${numero}.`)
if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.')
} else if (numero >= 6 && numero <= 9) {
    console.log('O número está entre 6 e 9.')
} else if (numero >=10 && numero <= 15) {
    console.log('O número está entre 10 e 15.')
} else if (numero >= 16) {
    console.log('O número é maior que 15.')
} else{
    console.log('O número é menor que 0')
};