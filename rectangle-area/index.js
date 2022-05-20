let width = window.prompt("Enter width");
let height = window.prompt("Enter height");

getArea(width, height)

function getArea(width, height) {
    
    document.getElementById("text").innerHTML = width*height;
}