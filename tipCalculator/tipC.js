document.getElementById("calculate").addEventListener("click", function() {
    let bill = document.getElementById("bill");
    let serQual = document.getElementById("serQual");
    let people = document.getElementById("people");
    let afterbill = document.getElementById("afterbill")
    let afterselect = document.getElementById("afterselect")
    let afterpeople = document.getElementById("afterpeople")
    let result = bill.value * serQual.value / 100 / people.value;
    if (bill.value =="" || bill.value <= 0) {
        afterbill.innerHTML = "Enter amount of the bill, please";
        if (serQual.value =="") {
            afterselect.innerHTML = "Choose an option, please";
            if (people ==""&& people <= 0) {
                afterpeople.innerHTML = "Enter Number of People, please";
            }
        }
        bill.focus();
    }else if (serQual.value =="") {
        afterbill.innerHTML = "";
        afterselect.innerHTML = "Choose an option, please";
        if (people.value ==""|| people.value <= 0) {
            afterpeople.innerHTML = "Enter Number of People, please";
        }else{
            afterpeople.innerHTML = "";
        }
    }else if (people.value ==""|| people.value <= 0) {
        afterbill.innerHTML = "";
        afterselect.innerHTML = "";
        afterpeople.innerHTML = "Enter Number of People, please";
        people.focus();
    }else {
        afterbill.innerHTML = "";
        afterselect.innerHTML = "";
        afterpeople.innerHTML = "";
        document.getElementById("h4").innerHTML = "TIP AMOUNT";
        document.getElementById("amount").innerHTML = "$" + result.toFixed(2);
        document.getElementById("each").innerHTML = "each";
        bill.value = ''
        bill.focus()
        people.value = ''
        serQual.value = ''
    }
})
