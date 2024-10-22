/* EXEMPLO DO EXERCÍCIO
Luiz Otávio Miranda tem 30 anos, pesa 84 kg, tem 1.80 de altura e seu IMC é de 25.925925925924
Luiz Otávio nasceu em 1984
*/

const nome = 'Andrei';
const sobrenome = 'Gravonski';
const idade = 19;
const peso = 90;
const alturaEmMts = 1.87;
const anoAtual = 2024;
let imc = peso / (alturaEmMts * alturaEmMts); 
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmMts} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`)