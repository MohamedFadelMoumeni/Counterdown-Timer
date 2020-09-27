

const newYears = '1 Jan 2021';
function formeTime(time) {

    if (time < 10) {
        return `0${time}`
    } else {
        return time;
    }
}
function countDown() {

    const dayElement = document.getElementById('days');
    const minuteElement = document.getElementById('minutes');
    const secondElement = document.getElementById('socends');
    const hoursElement = document.getElementById('hours');
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = Math.floor((newYearsDate - currentDate) / 1000);
    const second = Math.floor((seconds) % 60);
    const minutes = Math.floor(seconds / 60) % 60;
    const hours = Math.floor(seconds / 3600) % 24;
    const days = Math.floor(seconds / 3600 / 24);


    dayElement.textContent = formeTime(days);
    minuteElement.textContent = formeTime(minutes);
    secondElement.textContent = formeTime(second);
    hoursElement.textContent = formeTime(hours);
}
setInterval(countDown, 1000);


