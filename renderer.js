const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector(".sobre");

linkSobre.addEventListener("click", function(){
    ipcRenderer.send("open-window-about");
});
