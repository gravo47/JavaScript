const h1 = document.querySelector('.container h1');

const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;
const diaMes = data.getDate();
const mes = data.getMonth();
let mesTexto;
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

switch (mes) {
    case 0:
        mesTexto = 'janeiro'
        break;
    case 1:
        mesTexto = 'fevereiro'
        break;
    case 2:
        mesTexto = 'março'
        break;
    case 3:
        mesTexto = 'abril'
        break;
    case 4:
        mesTexto = 'maio'
        break;
    case 5:
        mesTexto = 'junho'
        break;
    case 6:
        mesTexto = 'julho'
        break;
    case 7:
        mesTexto = 'agosto'
        break;
    case 8:
        mesTexto = 'setembro'
        break;
    case 9:
        mesTexto = 'outubro'
        break;
    case 10:
        mesTexto = 'novembro'
        break;
    case 11:
        mesTexto = 'dezembro'
        break;
    default:
        mesTexto = 'Mês inválido'
}

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Data Inválida';
}

h1.innerHTML = `${diaSemanaTexto}, ${diaMes} de ${mesTexto} de ${ano} às ${hora}:${minutos}.`;