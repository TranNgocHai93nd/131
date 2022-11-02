
function backg () {// doi mau backgound body
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let z = Math.floor(Math.random()*100);
    document.body.style.backgroundColor= `rgb(${x}, ${y}, ${z},0.4)`;
    let doc = document.getElementById("but");
    doc.title="Change Color"
}



function add () {
    const content = document.getElementById("nameContent").value;// lay noi dung user input
    const maincontent = document.createElement("div");
        maincontent.className = ("main-content");
    const boxEmty = document.createElement("div");
        boxEmty.className = ("main-content_box1");
    const boxContent = document.createElement("div");
        boxContent.className = ("main-content_box2");
    const nodeCo = document.createTextNode(content);
        boxContent.appendChild(nodeCo);
        const boxconbut = document.createElement("div");
        boxEmty.className = ("main-content_box3");


    const boxBut = document.createElement("button");
        boxBut.className = "but-dele";
        boxconbut.appendChild(boxBut);
    const nodebut = document.createTextNode("Delete");
        boxBut.appendChild(nodebut);
    const element = document.getElementById("demo3");
    const boxFind = document.getElementById("demo5");
    maincontent.appendChild(boxEmty);
    maincontent.appendChild(boxContent);
    maincontent.appendChild(boxconbut);
    const listContent = document.getElementById("demo6");
    listContent.appendChild(maincontent);
    
    
   
  


}

const listContent = document.getElementById("demo6");
listContent.addEventListener('click',function (event){
    if(event.target.className === "but-dele") {
        const divItem = event.target.parentElement;
        listContent.remove(divItem);

}})




