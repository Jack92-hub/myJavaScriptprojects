document.getElementById("button").addEventListener("click", function (){
    var number = document.getElementById("input").value;
    if (number == "") {
        document.getElementById("word").innerHTML ="Enter number between 5 and 10";
        document.getElementById("word").style.color = "red";
    }
    else if (number < 5 || number > 10) {
        document.getElementById("word").innerHTML = "Entered number must be between 5 and 10";
        document.getElementById("word").style.color = "red";
    }else {
        var info = "";
        var num = 1;
        for (i = 1; i <=number; i++) {
            var td = "";
            for(j = 1; j<=number; j++) {
                td += "<td>" + num + "</td>";
                num++
            }
            info += "<tr>" + td + "</tr>";
        }
        document.getElementById("table").innerHTML = info;
        document.getElementById("word").style.visibility = "hidden";
        document.querySelectorAll("#table td").forEach(e => e.addEventListener("click", function(){
            var c = this.textContent;
            document.querySelectorAll("#table td").forEach(function(x) {
                if (x.textContent%c ==0){
                    x.textContent = "";
                    document.getElementById("input").focus();
                    
                }
                let px = 400/c
                x.style.width = px + "px";
            })
        }))
    }
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
});