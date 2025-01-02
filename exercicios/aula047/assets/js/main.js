function getSecondForHours(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
let seconds = 0;
let timerStart;

function startTimer() {
    timerStart = setInterval (function() {
        seconds++;
        timer.innerHTML = getSecondForHours(seconds);
    }, 1000)
}

start.addEventListener('click', function(event) {
    timer.classList.remove('paused');
    clearInterval(timerStart);
    startTimer();
});

pause.addEventListener('click', function(event) {
    timer.classList.add('paused')
    clearInterval(timerStart);
});

reset.addEventListener('click', function(event) {
    clearInterval(timerStart);
    timer.innerHTML = '00:00:00';
    seconds = 0; 
    timer.classList.remove('paused');
});

