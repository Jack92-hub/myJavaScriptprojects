let word = document.getElementById("word")
let input = document.getElementById("input")
let table = document.getElementById("table")
let cells = document.querySelectorAll("#table td")

document.getElementById("button").addEventListener("click", function (){
    let number = input.value;
    if (number == "") {
        word.innerHTML ="Enter number between 5 and 10";
        word.style.color = "red";
    }
    else if (number < 5 || number > 10) {
        word.innerHTML = "Entered number must be between 5 and 10";
        word.style.color = "red";
    }else {
        let info = "";
        let num = 1;
        for (i = 1; i <=number; i++) {
            let td = "";
            for(j = 1; j<=number; j++) {
                td += `<td>${num}</td>`
                num++
            }
            info += `<tr>${td}</tr>`
        }
        table.innerHTML = info;
        word.style.visibility = "hidden";
        cells.forEach(e => e.addEventListener("click", function(){
            let c = this.textContent;
            cells.forEach(function(x) {
                if (x.textContent%c ==0){
                    x.textContent = "";
                    input.focus();
                }
                let px = 400/c
                x.style.width = px + "px";
            })
        }))
    }
    input.value = "";
    input.focus();
});