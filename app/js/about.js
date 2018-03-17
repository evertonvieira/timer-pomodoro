const process = require("process");
const { ipcRenderer } = require("electron");

let linkDev = document.querySelector("#link-dev");
let nodeVersion = document.querySelector("#node-version");
let electronVersion = document.querySelector("#electron-version");
let chromiumVersion = document.querySelector("#chromium-version");

window.onload = function () {
    nodeVersion.textContent = process.version;
    electronVersion.textContent = process.versions.electron;
    chromiumVersion.textContent = process.versions.chrome;
}

linkDev.addEventListener("click", function(){
    ipcRenderer.send("open-link-dev");
});
