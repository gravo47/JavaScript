// function soma(a, b) {
//     return a + b;
// };

// console.log(soma(4, 8));

// function criaPessoa(nome, sobrenome, idade) {
//     return {nome: nome, sobrenome: sobrenome, idade: idade};
// };

// const p1 = criaPessoa('Andrei', 'Gravonski', 19);
// const p2 = criaPessoa('Lucas', 'Carneiro', 20);

// console.log(p1.nome);

function criaMultiplicador(multiplicador) {
    return function(n){
        return n * multiplicador;
    };
};

const duplo = criaMultiplicador(2);
const triplo = criaMultiplicador(3);
const quadruplo = criaMultiplicador(4);

console.log(duplo(1.5));
console.log(triplo(1));
console.log(quadruplo(0.75));