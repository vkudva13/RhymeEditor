const {remote, ipcRenderer} = require('electron')

document.getElementById('close-but').addEventListener('click',() => {
    remote.app.quit()
})
