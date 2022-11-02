

const img1 = document.getElementById("searchIcon");

function display () {
    const inp =document.getElementById("content")
    inp.style.width="200px";
}
function display1 () {
    const inp =document.getElementById("content")
    inp.style.width="0px";
}

// img1.onmouseup=display;
// img1.onmousedown=display1;
img1.addEventListener("mouseup",display1);
img1.addEventListener("mousedown",display);