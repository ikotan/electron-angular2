const {app, BrowserWindow} = require('electron');

module.exports = class FormWindow {
  constructor() {
    this.window = null;
    this.start();
  }

  start() {
    app.on('ready', () => {
      this.createWindow();
    });

    app.on('showForm', () => {
      this.window.show();
    });
  }

  createWindow() {
    // this.window = new BrowserWindow({
      // title: 'ツイート',
      // center: true,
      // resizable: false,
      // minimizable: false,
      // maxmizable: false,
      // width: 300,
      // height: 250,
      // show: false
    // });

    // this.window.on('close', (event) => {
      // if (this.window.isVisible()) {
        // this.window.hide();
        // event.preventDefault();
      // }
    // });

    // this.window.loadURL(`file://${__dirname}/../../html/form.html`);
  }
};
