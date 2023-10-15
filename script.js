let state = false;
let button = document.querySelector("#button");
let musicImg = document.querySelector("#musicPlayerImage");
let music = document.querySelector("#test-song");


button.addEventListener("click", ()=> {
    music.volume = 0.05;
    if(state === false) {
        musicImg.classList.add("active");
        button.classList.remove("musicPlayerButtonPlay");
        button.classList.add("musicPlayerButtonPause");
        music.play();
    }else {
        musicImg.classList.remove("active");
        button.classList.remove("musicPlayerButtonPause");
        button.classList.add("musicPlayerButtonPlay");
        music.pause();
    }
    state = !state;
});
