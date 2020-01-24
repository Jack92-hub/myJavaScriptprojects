document.getElementById ("menu-togler").addEventListener("click", function() {
    let activeElements = document.querySelectorAll(".active-element");
    activeElements.forEach(e => e.classList.toggle("active"));
})