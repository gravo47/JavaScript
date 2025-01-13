function criaPessoa (nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${nome} ${sobrenome} que tem ${altura} de altura e ${peso}kg está falando sobre ${assunto}.`
        },
        altura,
        peso,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
};

const p1 = criaPessoa('andrei', 'gravonski', 1.80, 90);
console.log(p1.fala('JavaScript'));
console.log(p1.imc());