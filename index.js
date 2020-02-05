const {app, BrowserWindow} =  require('electron');
const path = require('path');
const url = require('url');

var win;
var modPath = "/appMods/";

function startMain(){
    win = new BrowserWindow({
        width:1000,height:600,frame:false,
        
    });
    
    win.loadURL(url.format({
        pathname: path.join(__dirname,modPath,'index.html'),
        protocol:'file',
        slashes:true
    }))
}

app.on('ready',startMain);



app.on('all-window-closed',() =>{
    if(process.platform != 'darwin'){
        app.quit();
    }
})