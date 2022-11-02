const items = document.querySelectorAll('.box-items');
const itemsText = document.querySelectorAll('.text-box')
console.log(itemsText);

for (let i=0 ; i < items.length ; i++) {
     items[i].addEventListener('click',myfunction) 
    function myfunction (event) {
        clearClass();
        items[i].classList.add('box-items_active');
        addText ();
        let parent = event.target;
        parent.nextElementSibling.classList.add('active')
    }
}
function clearClass () {
    for (let i=0 ; i < items.length ; i++) {
        items[i].classList.remove('box-items_active')
       }
}
function addText (event) {
    for (let i=0 ; i < items.length ; i++) {
        itemsText[i].classList.remove('active')
        ;
    }
}







