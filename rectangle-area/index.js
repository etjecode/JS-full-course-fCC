let width = window.prompt("Enter width of the rectangle");
let height = window.prompt("Enter height of the rectangle");

getArea(width, height)

function getArea(width, height) {
    
    document.getElementById("text").innerHTML = "Area of the rectangle is: " + width*height;
}