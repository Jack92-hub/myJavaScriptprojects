document.getElementById("calculate").addEventListener("click", function() {
    let bill = document.getElementById("bill").value;
    let serQual = document.getElementById("serQual").value;
    let people = document.getElementById("people").value;
    let result = bill * serQual / 100 / people;
    if (bill =="" || bill <= 0) {
        document.getElementById("afterbill").innerHTML = "Enter amount of the bill, please";
        if (serQual =="") {
            document.getElementById("afterselect").innerHTML = "Choose an option, please";
            if (people ==""&& people <= 0) {
                document.getElementById("afterpeople").innerHTML = "Enter Number of People, please";
            }
        }
        document.getElementById("bill").focus();
    }else if (serQual =="") {
        document.getElementById("afterbill").innerHTML = "";
        document.getElementById("afterselect").innerHTML = "Choose an option, please";
        if (people ==""|| people <= 0) {
            document.getElementById("afterpeople").innerHTML = "Enter Number of People, please";
        }else{
            document.getElementById("afterpeople").innerHTML = "";
        }
    }else if (people ==""|| people <= 0) {
        document.getElementById("afterbill").innerHTML = "";
        document.getElementById("afterselect").innerHTML = "";
        document.getElementById("afterpeople").innerHTML = "Enter Number of People, please";
        document.getElementById("people").focus();
    }else {
        document.getElementById("afterbill").innerHTML = "";
        document.getElementById("afterselect").innerHTML = "";
        document.getElementById("afterpeople").innerHTML = "";
        document.getElementById("h4").innerHTML = "TIP AMOUNT";
        document.getElementById("amount").innerHTML = "$" + result.toFixed(2);
        document.getElementById("each").innerHTML = "each";
    }
})
