const { app, BrowserWindow } = require("electron");


app.on("ready", () => {

    let HomeWindow = new BrowserWindow({
        width: 450,
        height: 250
    });

    HomeWindow.loadURL(`file://${__dirname}/app/views/index.html`);

});

app.on("window-all-closed", () => {
    app.quit();
});
