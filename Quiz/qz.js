let url = 'http://127.0.0.1:5500/Quiz/sample.json'
let container = document.getElementById("container")
let label = document.querySelectorAll("#radio")
const loadQuestions = (url) => {
    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                return Promise.reject(res)
            }
        })
        .then((data) => {
            renderQuestion(data)
            
        })
        .catch(() => {
            container.innerHTML += "Questions could not be loaded"
            container.style.color = "red"
        })
}
loadQuestions(url)

let i = 0;

let renderQuestion = (data) => {
    container.innerHTML +=
        '<p>' + data[i].question + '</p><form id="form">\
    <label id ="radio" class="radio"><input type="radio" name="options" value="' + data[i].options[0] + '">' + data[i].options[0] + '</label>\
    <label id ="radio" class="radio"><input type="radio" name="options" value="' + data[i].options[1] + '">' + data[i].options[1] + '</label>\
    <label id ="radio" class="radio"><input type="radio" name="options" value="' + data[i].options[2] + '">' + data[i].options[2] + '</label>\
    <label id ="radio" class="radio"><input type="radio" name="options" value="' + data[i].options[3] + '">' + data[i].options[3] + '</label>\
    </form>'
}


let button = document.getElementById('button')
button.addEventListener("click",function(){
    console.log("working")
})

// label.forEach(e=>e.addEventListener("click", function(){
//     let labContent = this.textContent
//     alert("hi")
// }))


window.addEventListener("change", function(){
    let val = document.querySelectorAll("input[name='options']")
    val.forEach(function (e) {
        if (e.checked) {
            alert(e.value)
        }
    })
})
