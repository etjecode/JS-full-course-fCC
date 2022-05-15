let userName = window.prompt("Choose a username.");

let newName = (userName.charAt(0).toUpperCase() + userName.slice(1)).replaceAll(" ","");

// let newName = letter + userName.slice(1);

document.getElementById("nameLabel").innerHTML = newName;
