var menuBtn = document.getElementById("menu")
var closeBtn = document.getElementById("close")
menuBtn.addEventListener("click", () => {
    let menu = document.getElementById("menu_list")
    menu.style.visibility = "inherit"
    menu.classList.toggle("active")
})
closeBtn.addEventListener("click", () => {
    let menu = document.getElementById("menu_list")
    menu.style.visibility = "hidden"
    menu.classList.toggle("active")
})