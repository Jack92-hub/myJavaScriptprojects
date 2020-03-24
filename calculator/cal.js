let historyValue = document.getElementById("history-value")
let outputValue = document.getElementById('output-value')
function getHistory() {
    return historyValue.innerText;
}
function printHistory(num) {
    historyValue.innerHTML = num;
}
function getOutput() {
    return outputValue.innerText;
}
function printOutput(num) {
    if (num == "") {
        outputValue.innerText = num
    }else {
        outputValue.innerHTML = getFormattedNumber(num);
    }   
}
function getFormattedNumber(num) {
    if (num =="-") {
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
function reverseFormatNumber(num) {
    return Number(num.replace(/,/g,''));
}
let operator = document.getElementsByClassName('operators');
for (i = 0; i < operator.length; i++) {
    operator [i].addEventListener("click", function() {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }else if (this.id == "backspace") {
            var output = reverseFormatNumber(getOutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
            if(output ==""){
                var history = getHistory();
                history = history.substr(0, history.length - 1);
                printHistory(history);
            }
        }else {
            var output = getOutput();
            var history = getHistory();
            if (output==""&&history!="") {
                if (isNaN(history[history.length-1])) {
                    history = history.substr(0,history.length-1);
                }
            }
            if (output!= ""|| history!="") {
                output = output==""?
                output:reverseFormatNumber(output);
                history = history + output;
                historyValue.style.fontSize = "15px"
                if (this.id == "=") {
                    if (history!=""){
                        var result = eval(history);
                        printOutput("");
                        printHistory(getFormattedNumber(result));
                        historyValue.style.fontSize = "30px";
                    }
                    
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });

}
let number = document.getElementsByClassName('items');
for (i = 0; i < number.length; i++) {
    number [i].addEventListener("click", function() {
        var output = reverseFormatNumber(getOutput());
        var history = getHistory();
        
        
        if (output!=NaN && output < 10000000000000000) {
            output = output + this.id;
            printOutput(output);
            var arr = history.split("");
            for (i in arr) {
                var b = Number(arr[i]);
                if(isNaN(b)) {
                    printHistory(history);
                }else {
                    printHistory("");
                }
            }
        }
    });
}


