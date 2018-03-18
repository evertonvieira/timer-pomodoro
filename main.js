const { app, BrowserWindow, ipcMain, shell, Notification } = require("electron");

app.on("ready", () => {

    let homeWindow = new BrowserWindow({
        width: 450,
        height: 280,
        resizable: false,
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
            height: 200,
            resizable: false,
            movable: false,
            alwaysOnTop: true,
            minimizable: false
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
