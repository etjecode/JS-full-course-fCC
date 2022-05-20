let userName = window.prompt("Enter your name");

greetUser(userName);

function greetUser(userName) {
        document.getElementById("text").innerHTML = "Hello "+userName;
}