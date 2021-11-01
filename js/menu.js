const menuBtn = document.getElementById("menu")
const closeBtn = document.getElementById("close")
var listItem = document.querySelectorAll(".nav_bar_item a")
console.log(Array.from(listItem))
let closeMenu = () => {
    let menu = document.getElementById("menu_list")
    menu.style.visibility = "hidden"
    menu.classList.toggle("active")
}
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
Array.from(listItem).forEach((element) => {
    element.addEventListener('click', () => {
        setTimeout(closeMenu, 1500)

    })
});