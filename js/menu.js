var menuBtn = document.getElementById("menu")
var closeBtn = document.getElementById("close")
menuBtn.addEventListener("click", () => {
    let menu = document.getElementById("menu_list")
    menu.style.visibility = "inherit"
})
closeBtn.addEventListener("click", () => {
    let menu = document.getElementById("menu_list")
    menu.style.visibility = "hidden"
})