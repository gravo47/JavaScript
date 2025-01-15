function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
};

const p1 = new Pessoa('Andrei', 'Gravonski');

console.log(p1);