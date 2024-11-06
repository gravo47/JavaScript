/*const cadastro = {
    nome : 'Andrei',
    sobrenome : 'Gravonski',
    graduação : 'Engenharia de Software',
    idade : 19,
    endereço :  'Rua N° Sra. do Rocio, 90, Vila Nova, Irati-PR'
};

console.log(`${cadastro.nome} ${cadastro.sobrenome} tem ${cadastro.idade} anos, cursa ${cadastro.graduação} e seu endereço é: ${cadastro.endereço}`);

const pessoa = (nome, sobrenome, idade) => ({
    nome : nome,
    sobrenome : sobrenome,
    idade : idade
});

const criaPessoa1 = pessoa('Andrei', 'Gravonski', 19);
const criaPessoa2 = pessoa('Kamili', 'Pires', 21);
const criaPessoa3 = pessoa('Lucas', 'Oliveira', 25);
const criaPessoa4 = pessoa('Mateus', 'Brasileiro', 31);
console.log(criaPessoa1.nome);
console.log(criaPessoa2.nome);
console.log(criaPessoa4.sobrenome);
console.log(criaPessoa3.idade);
*/

const pessoa1 = {
    nome : 'Andrei',
    sobrenome : 'Gravonski',
    idade : 19,

    fala() {
        console.log(`Bom dia, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos!`)
    }
};

pessoa1.fala()