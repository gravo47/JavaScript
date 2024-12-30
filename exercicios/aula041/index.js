// escrever uma função para receber dois numeros e mostrar o maior deles:
//FUNÇÃO NÚMERO MAIOR
const r = Math.random() * (max - min) + min;
    return Math.round(r);

const min1 = 1;
const max1 = 100;
let num1 = random(min1, max1);

const min2 = 1;
const max2 = 100;
let num2 = random(min2, max2);

console.log(`Os números sorteados foram: ${num1} e ${num2}`);
    if (num1 > num2) {
    console.log(`O número ${num1} é maior que o número ${num2}`)
    } else {
    console.log(`O número ${num2} é maior que o número ${num1}`)
};



