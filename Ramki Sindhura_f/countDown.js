/*dayjs.extend(dayjs_plugin_duration);

function activateTimer(element, date){
    const targetdate = dayjs(date);
    element.querySelector(".daysQuote").textContent = `${ targetdate.format("D MMMM YYYY")}`;

    setInterval(()=>{
        const now = dayjs();
        const duration = dayjs.duration(targetdate.diff(now));

        //console.log(duration.asWeeks());
        if (duration.asMilliseconds()<=0) return;
        element.querySelector(".seconds").textContent=duration.seconds().toString().padStart(2,"0");
        element.querySelector(".minutes").textContent=duration.minutes().toString().padStart(2,"0");
        element.querySelector(".hours").textContent=duration.hours().toString().padStart(2,"0");
        element.querySelector(".days").textContent=duration.asDays().toFixed("0").toString().padStart(2,"0");
        //console.log(duration.seconds().toString());
    },250);

}
document.addEventListener("DOMContentLoaded", function () {
    activateTimer(document.getElementById("myCountDown"), "2023-11-19");
});*/

/* Play pause-------------------
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("myAudio");
    const playPauseButton = document.getElementById("playPauseButton");

    playPauseButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseButton.textContent = "Pause";
        } else {
            audio.pause();
            playPauseButton.textContent = "Play";
        }
    });
});*/

document.addEventListener("DOMContentLoaded", function() {
    const audio1 = document.getElementById("myAudio1");
    const playPauseButton1 = document.getElementById("playPauseButton1");

    playPauseButton1.addEventListener("click", function() {
        if (audio1.paused) {
            audio1.play();
            playPauseButton1.querySelector(".play-icon").style.display = "none";
            playPauseButton1.querySelector(".pause-icon").style.display = "block";
        } else {
            audio1.pause();
            playPauseButton1.querySelector(".play-icon").style.display = "block";
            playPauseButton1.querySelector(".pause-icon").style.display = "none";
        }
    });
    /*playPauseButton1.addEventListener("click", function() {
        if (audio1.paused) {
            audio1.play();
            playPauseButton1.innerHTML = '<svg class="pause-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h4v16h-4zm8 0h4v16h-4z"></svg>';
        } else {
            audio1.pause();
            playPauseButton1.innerHTML = '<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></svg>';
        }
    });*/

    const audio2 = document.getElementById("myAudio2");
    const playPauseButton2 = document.getElementById("playPauseButton2");

    playPauseButton2.addEventListener("click", function() {
        if (audio2.paused) {
            audio2.play();
            playPauseButton2.querySelector(".play-icon").style.display = "none";
            playPauseButton2.querySelector(".pause-icon").style.display = "block";
        } else {
            audio2.pause();
            playPauseButton2.querySelector(".play-icon").style.display = "block";
            playPauseButton2.querySelector(".pause-icon").style.display = "none";
        }
    });
    /*playPauseButton2.addEventListener("click", function() {
        if (audio2.paused) {
            audio2.play();
            playPauseButton2.innerHTML = '<svg class="pause-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h4v16h-4zm8 0h4v16h-4z"></svg>';
        } else {
            audio2.pause();
            playPauseButton2.innerHTML = '<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></svg>';
        }
    });*/
});


function updateAnniversaryTimer() {
    const marriageDate = new Date('2023-11-19T02:30:00Z'); // Replace with your brother's wedding date
    const currentDate = new Date();
    const timeDifference = currentDate - marriageDate;

    const secondsSinceMarriage = Math.floor(timeDifference / 1000);
    const days = Math.floor(secondsSinceMarriage / 86400);
    const hours = Math.floor((secondsSinceMarriage % 86400) / 3600);
    const minutes = Math.floor(((secondsSinceMarriage % 86400) % 3600) / 60);
    const seconds = secondsSinceMarriage % 60;

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update the timer every second
setInterval(updateAnniversaryTimer, 1000);

// Calculate and display it immediately
updateAnniversaryTimer();
