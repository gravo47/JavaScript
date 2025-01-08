// function falaOi() {
//     console.log('oi');
// };

// falaOi('Valor');

// function funçao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// };

// funçao(5,8);

// function cadastro({nome , sobrenome, idade}){
//     console.log(nome, sobrenome, idade);
// };

// let obj = {nome: 'Andrei', sobrenome: 'Gravonski', idade: 19};

// cadastro(obj);

function soma(operador, acumulador, ...numeros){
    for (let number of numeros){
        if (operador === '+') acumulador += number;
        if (operador === '-') acumulador -= number;
        if (operador === '*') acumulador *= number;
        if (operador === '/') acumulador /= number;
    }
    console.log(acumulador);
};

soma('+', 0, 1, 9, 58, 78);