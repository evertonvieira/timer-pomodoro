const { app, BrowserWindow } = require("electron");


app.on("ready", () => {

    let MyWindow = new BrowserWindow({
        width: 450,
        height: 250
    });

});

app.on("window-all-closed", () => {
    app.quit();
});
