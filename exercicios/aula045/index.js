// try {
//     console.log('Abri o arquivo');
//     console.log('Executando o arquivo');
//     console.log('Fechando o arquivo');
// } catch(e) { 
//     console.log('A execução aconteceu com erros');
//     console.log('Tratando os erros');
// } finally {
//     console.log('Arquivo fechado!');
// }

function retornaHora(data) {
    if(data && !(data instanceof Date)) {
        throw new Error('Esperando instância de data!')
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour12: false
    });
};

try {
    const data = new Date();
    const hora = retornaHora(data);
    console.log(hora);
} catch(e) {

} finally {
    console.log('Hava a nice day!')
}