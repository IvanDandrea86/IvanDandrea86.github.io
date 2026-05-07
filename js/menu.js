const menuBtn = document.getElementById("menu")
const menu = document.getElementById("menu_list")
const closeBtn = document.getElementById("close")
var listItem = document.querySelectorAll(".nav_bar_item a")
let closeMenu = () => {
    menu.classList.remove("active")
}
menuBtn.addEventListener("click", () => {
    menu.classList.add("active")
})
closeBtn.addEventListener("click", () => {
    menu.classList.remove("active")
})

Array.from(listItem).forEach((element) => {
    element.addEventListener('click', () => {
        setTimeout(closeMenu, 1500)

    })
});