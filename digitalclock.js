const hourE1 = document.getElementById("hours");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "AM";

    if (hour > 12) {
        hour = hour - 12;
        ampm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    hourE1.innerText = hour;
    minuteE1.innerText = minute;
    secondE1.innerText = second;
    ampmE1.innerText = ampm;
    setTimeout(updateClock, 1000);
}

updateClock();