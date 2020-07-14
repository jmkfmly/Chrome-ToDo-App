const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('.clockTitle')

function getCurrentTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTitle.innerText = (`${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}`);
}

function init(){
    getCurrentTime();
    setInterval(getCurrentTime,1000);
}
init();