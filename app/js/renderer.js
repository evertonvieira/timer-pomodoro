const { ipcRenderer } = require("electron");

const timer = require("./timer");

let linkSobre = document.querySelector(".sobre");
let play = document.querySelector("#play");
let stop = document.querySelector("#stop");
let valueTimer = document.querySelector(".value-timer");

linkSobre.addEventListener("click", function(){
    ipcRenderer.send("open-window-about");
});


play.addEventListener("click", function(){
    timer.play(valueTimer);
    play.disabled = true;
    stop.disabled = false;
});

stop.addEventListener("click", function(){
    timer.stop(valueTimer);
    stop.disabled = true;
    play.disabled = false;
});

ipcRenderer.on('play-timer', () => {
    console.log('Atalho no renderer process');
    let click = new MouseEvent('click');
    play.dispatchEvent(click);
});

ipcRenderer.on('stop-timer', () => {
    console.log('Atalho no renderer process');
    let click = new MouseEvent('click');
    stop.dispatchEvent(click);
});