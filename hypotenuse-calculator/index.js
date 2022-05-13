document.getElementById("submitButton").onclick = function() {
    a = document.getElementById("aTextBox").value;
    console.log(a, typeof a);

    a = Number(a);
    console.log(a, typeof a);

    b = document.getElementById("bTextBox").value;
    console.log(b, typeof b);

    b = Number(b);
    console.log(b, typeof b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("cLabel").innerHTML = "Side C: "+c;
    console.log(c, typeof c);
}

