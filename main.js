const { app, BrowserWindow, ipcMain, shell } = require("electron");

app.on("ready", () => {

    let homeWindow = new BrowserWindow({
        width: 450,
        height: 250
    });

    homeWindow.loadURL(`file://${__dirname}/app/views/index.html`);

});

app.on("window-all-closed", () => {
    app.quit();
});

let aboutWindow = null;
ipcMain.on("open-window-about", () => {

    if (aboutWindow == null) {

        aboutWindow  = new BrowserWindow({
            width: 350,
            height: 170,
            resizable: false,
            movable: false,
            alwaysOnTop: true
        });

        aboutWindow.loadURL(`file://${__dirname}/app/views/about.html`);

        aboutWindow.on("closed", () => {
            aboutWindow = null;
        });

    }

});

ipcMain.on("open-link-dev", () => {
    shell.openExternal('https://github.com/evertonvieira')
});
