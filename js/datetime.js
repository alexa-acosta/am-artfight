function startTime() {
    var todayTime = new Date().toLocaleString([],
        {timeZone: "America/Los_Angeles",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true});

    document.getElementById("datetime").innerHTML = todayTime.toLocaleString() + " PDT";

    t = setTimeout(function () {
        startTime();
    }, 1000);
}

startTime();