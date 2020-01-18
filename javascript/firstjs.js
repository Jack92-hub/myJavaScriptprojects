var xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj;
        console.log("hello")
        console.log(myObj)
    }
};
//console.log(myObj)
xmlhttp.open("GET", "json.json", true);

xmlhttp.send();
