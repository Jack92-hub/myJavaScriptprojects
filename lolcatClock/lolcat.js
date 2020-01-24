let greet = document.getElementById("greet")
let picture = document.getElementById("picture")

const images = {
	party: 'url("party.jpg")',
	morning: 'url("morning.jpg")',
	evening: 'url("evening.jpg")',
	afternoon: 'url("afternoon.jpg")',
}

function setImage(img) {
	picture.style.backgroundImage = img
}

function time () {
    let d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString() + "!";          
}
let time = setInterval(time);

function myTimer() {
    let d = new Date();
	let h = d.getHours();
	let { morning, afternoon, evening } = images 
    if (h < 12) {
        setImage(morning)
        greet.innerHTML = "\"GOOD MORNING!\"";
    } else if (h >= 12 && h <= 18) {
        setImage(afternoon)
        greet.innerHTML = "\"GOOD AFTERNOON!\"";
    } else if (h >= 18) {
        setImage(evening)
        greet.innerHTML = "\"GOOD EVENING!\"";
    }
}
let myVar = setInterval(myTimer);
let btn = document.getElementById("button");
let status = 1;
btn.addEventListener("click", function () {
    if (status == 1) {
        btn.style.backgroundColor = "blue";
        btn.innerHTML = 'PARTY OVER!';
        setImage(images.party)
        greet.innerHTML = "\"LET\'S PARTY!\"";
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