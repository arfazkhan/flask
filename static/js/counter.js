var countDownDate = new Date("Mar 5, 2023 12:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();    
    var timeRemaining = countDownDate - now;    
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (timeRemaining < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "<h3>Sale is now live!</h3>";
    }
}, 1000);