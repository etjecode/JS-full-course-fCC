document.getElementById("myButton").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    const subscription = document.getElementById("subscription");
    const paymentType = document.getElementById("paymentType");

    if(myCheckBox.checked) {
        subscription.innerHTML = "You are subscribed.";
    } else {
        subscription.innerHTML = "You are NOT subscribed!";
    }

    if(visaBtn.checked) {
        paymentType.innerHTML = "You are paying with a Visa.";
    } else if(mastercardBtn.checked) {
        paymentType.innerHTML = "You are paying with a MasterCard.";
    } else if(paypalBtn.checked) {
        paymentType.innerHTML = "You are paying with PayPal.";
    } else {
        paymentType.innerHTML = "You MUST select a payment type!";
    }
}