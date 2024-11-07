/*let nome = "Andrei"
console.log(nome[2])*/

/*let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);*/

/*let a = [1,2,3];
let b = [...a];
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);*/

const a = {
    nome : 'Andrei',
    sobrenome : 'Gravonski'
};

const b = {
    ...a
} 

b.nome = 'Anthony'; 

console.log(a);
console.log(b);