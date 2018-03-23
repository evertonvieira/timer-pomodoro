const { app, BrowserWindow, ipcMain, shell, Notification, Tray, Menu  } = require("electron");

let tray = null;

app.on("ready", () => {

    let homeWindow = new BrowserWindow({
        width: 450,
        height: 310,
        //resizable: false,
    });

    homeWindow.loadURL(`file://${__dirname}/app/views/index.html`);

    tray = new Tray(
        `${__dirname}/app/img/icon.png`
    );

    let trayMenu = Menu.buildFromTemplate([
        {
            label: 'Fechar', 
            type:'normal',
            click(){
                app.quit();
            }
        }
    ]);

    tray.setContextMenu(trayMenu);

});

app.on("window-all-closed", () => {
    app.quit();
});

let aboutWindow = null;
ipcMain.on("open-window-about", () => {

    if (aboutWindow == null) {

        aboutWindow  = new BrowserWindow({
            width: 350,
            height: 210,
            resizable: false,
            minimizable: false,
            maximizable: false,
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