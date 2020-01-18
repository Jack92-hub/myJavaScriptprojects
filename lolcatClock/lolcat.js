function time () {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString() + "!";          
}
var time = setInterval(time);
function myTimer() {
    var d = new Date();
    var h = d.getHours();
    if (h < 12) {
        document.getElementById("picture").style.backgroundImage = 'url("morning.jpg")';
        document.getElementById("greet").innerHTML = "\"GOOD MORNING!\"";
    } else if (h >= 12 && h <= 18) {
        document.getElementById("picture").style.backgroundImage = 'url("afternoon.jpg")';
        document.getElementById("greet").innerHTML = "\"GOOD AFTERNOON!\"";
    } else if (h >= 18) {
        document.getElementById("picture").style.backgroundImage = 'url("evening.jpg")';
        document.getElementById("greet").innerHTML = "\"GOOD EVENING!\"";
    }
}
var myVar = setInterval(myTimer);
var btn = document.getElementById("button");
var status = 1;
btn.addEventListener("click", function () {
    if (status == 1) {
        btn.style.backgroundColor = "blue";
        btn.innerHTML = 'PARTY OVER!';
        document.getElementById("picture").style.backgroundImage = 'url("party.jpg")';
        document.getElementById("greet").innerHTML = "\"LET\'S PARTY!\"";
        clearInterval(myVar);
        status = 2;
    } else {
        myTimer();
        myVar = setInterval(myTimer);
        btn.style.backgroundColor = "black";
        btn.innerHTML = 'PARTY TIME!';
        status = 1;
    }
});