// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// };

//FUNÇÃO DE GERADOR DE NÚMEROS ALEATÓRIO//
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}
