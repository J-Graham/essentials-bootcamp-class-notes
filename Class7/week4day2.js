function turnButtonGreen() {
    var button = document.getElementById("myFavoriteButton");
    if (button.style.backgroundColor != "green") {
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "";
    }
}

function getRadioButtons() {
    //

    var radioButtons = document.getElementsByName("paymentMethod");
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return radioButtons[i].value;
        }
    }

    var x = 0;
    x++;
    ++x;
}
