let userName = "";

while (userName == "") {
 
    userName = window.prompt("Choose a username.");

}

let newName = (userName.charAt(0).toUpperCase() + userName.slice(1)).replaceAll(" ","");

document.getElementById("nameLabel").innerHTML = newName;
