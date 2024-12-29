const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
do {
    let num = numeros[i];

        if (num === 2 || num === 5){
            i++;
            continue;
        }

    console.log(num);

        if (num ===8){
            i++;
            break;
        }

    i++;
} while (i < numeros.length);

