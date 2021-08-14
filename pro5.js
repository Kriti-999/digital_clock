// JavaScript source cod

function showTime() {
    const d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var session = "AM";
    if (hours == 0) {
        hours = 12;
    }
    else if (hours > 12) {
        hours=hours-12;
        session = "PM";
    }
    hours = (hours < 10)? 0 + hours: hours;
    sec = (sec < 10)? 0 + sec: sec;
    min = (min < 10) ? 0 + min : min;
    var time = hours + ":" + min + ":" + sec + " " + session;
    document.getElementById("demo").innerHTML = time;
    document.getElementById("demo").textContent = time;
    setTimeout(showTime, 1000);
}
showTime();
