const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', ()=> {

  let win = new BrowserWindow({width:800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  win.webContents.openDevTools()
})

exports.openWindow = () => {
  let win = new BrowserWindow({width: 600, height: 400})
  win.loadURL(`file://${__dirname}/win2.html`)
}
