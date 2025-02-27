var audio = new Audio("IMLS Webpage Music.mp3");
audio.loop = true;

function setInitialMusicState() {
    if (localStorage.getItem("musicState") === "playing") {
        audio.play();
        document.getElementById("music-icon").innerHTML = "♬"; 
    } else {
        audio.pause();
        document.getElementById("music-icon").innerHTML = "♪"; 
    }
}

function toggleMusic() {
    if (audio.paused) {
        audio.play();
        document.getElementById("music-icon").innerHTML = "♬"; 
        localStorage.setItem("musicState", "playing");
    } else {
        audio.pause();
        document.getElementById("music-icon").innerHTML = "♪"; 
        localStorage.setItem("musicState", "paused");
    }
}

setInitialMusicState();