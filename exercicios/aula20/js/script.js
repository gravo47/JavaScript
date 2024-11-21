function meuEscopo () {
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultados');

    const pessoas = [];
    
    function recebaEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultados.innerHTML += `<p>${nome.value} ${sobrenome.value}` + `${peso.value} ${altura.value}</p>`;

        console.log(nome.value, sobrenome.value, peso.value, altura.value);

    }
    
    form.addEventListener('submit', recebaEventoForm);
}
meuEscopo();