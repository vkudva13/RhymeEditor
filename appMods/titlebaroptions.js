const BrowserWindow = require('electron').remote.BrowserWindow;
let count=0;
const plus=document.getElementById('new-win-button');
const minimizebtn=document.getElementById('minimize');
const maxrestore=document.getElementById('max-restore');
const close=document.getElementById('close');

minimizebtn.addEventListener('click',()=>{
    BrowserWindow.getFocusedWindow().minimize();
});
maxrestore.addEventListener('click',()=>{
    BrowserWindow.getFocusedWindow().maximize();
});
close.addEventListener('click',()=>{
    BrowserWindow.getFocusedWindow().close();
});
plus.addEventListener('click',()=>{
    count+=1;
    document.getElementById('addhere').insertAdjacentHTML('beforeend', '<div class="new-win" id="new-win'+count+'"> <div class="new-win-head" id="new-win-head"> <div id="new-win-head-title"><span id="wintitle"><input type="text" class="title" id="title'+count+'" autofocus>test.js</span></div> </div> <textarea id="textbox"></textarea> </div>');
    console.log(count);
});


