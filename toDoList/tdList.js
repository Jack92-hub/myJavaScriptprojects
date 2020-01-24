function createList() {
    if (document.getElementById("input").value !== "") {
        var input = document.getElementById("input");
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.classList.toggle("list");
        ul.appendChild(li);
        input.value = "";
        input.focus();
        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode("X"));
        btn.classList.toggle("btn");
        li.appendChild(btn);
        btn.addEventListener("click", function (){
            li.classList.add("delete");
            input.focus();
        });
    }
}
document.getElementById("enter").addEventListener("click", createList);
function afterkeyPress() {
    if (document.getElementById("input").value !== "" && event.key==='Enter') {
        createList();
    }
}
input.addEventListener("keypress", afterkeyPress);
