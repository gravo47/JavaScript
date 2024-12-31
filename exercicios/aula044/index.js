// try {
//     console.log(x);
// } catch(erro) {
//     console.log('oi')
//     console.log(erro);
// };

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('eeeeee tiozão, X e Y tem que ser números fião, slk não percebe a estrutura do programa parça! smdd & forte abraço malandrage')
    } 
    
    return x + y;
};

try{
    console.log(soma(1, 200));
    console.log(soma('1', 200));
} catch(erro) {
    console.log(erro)
};