const pessoa = {
    firstName: 'Andrei',
    lastName : 'Gravonski',
    age : 19,
    adress : {
        street : 'Nossa Sra do Rocio',
        number : 90,
        district : 'Vila Nova',
        city : 'Irati',
        state : 'Paraná'
    }
}

const {firstName, age} = pessoa;

console.log(firstName, age);