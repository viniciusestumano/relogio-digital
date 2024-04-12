const hour = document.getElementById('horas');
const min = document.getElementById('minutos');
const sec = document.getElementById('segundos');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = seconds;
     
});