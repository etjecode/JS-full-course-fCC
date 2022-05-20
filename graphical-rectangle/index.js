let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(i=1; i<=rows; i+=1) {
    for(j=1; j<=columns; j+=1) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }   document.getElementById("myRectangle").innerHTML += "<br>";
}