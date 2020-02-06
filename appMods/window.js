let wincount=0;
let container=document.getElementById('addhere');
let dragwin=document.querySelectorAll(".new-win");
dragElement(dragwin[0]);
container.addEventListener('change',()=>{
  dragwin=document.querySelectorAll(".new-win");
  for (i = 0; i < dragwin.length; i++) {
    console.log(dragwin[i]);
    dragElement(dragwin[i]);
  }
});



function dragElement(elmnt) {
  console.log("drag ele");
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-head")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-head").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    console.log("drag down");
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    console.log("ele drag");
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    console.log("close drag");
    checkForVoid(e);
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function checkForVoid(event)
  {
    console.log("check void");
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    console.log(elemBelow.id);
    if (elemBelow.id=="void")
    {
      console.log("close window");
      elmnt.parentNode.removeChild(elmnt);
    }
  }
}