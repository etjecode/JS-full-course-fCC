let userName = window.prompt("Choose a username.");

let letter = userName.charAt(0).toUpperCase();

let newName = letter + userName.slice(1);

document.getElementById("nameLabel").innerHTML = newName;
