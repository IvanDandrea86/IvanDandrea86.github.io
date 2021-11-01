const menuBtn = document.getElementById("menu")
const menu = document.getElementById("menu_list")
const closeBtn = document.getElementById("close")
var listItem = document.querySelectorAll(".nav_bar_item a")
console.log(Array.from(listItem))
let closeMenu = () => {

    menu.style.visibility = "hidden"
    menu.classList.toggle("active")
}
menuBtn.addEventListener("click", () => {

    menu.style.visibility = "visible"
    menu.classList.toggle("active")
})
closeBtn.addEventListener("click", () => {

    menu.style.visibility = "hidden"
    menu.classList.toggle("active")
})

Array.from(listItem).forEach((element) => {
    element.addEventListener('click', () => {
        setTimeout(closeMenu, 1500)

    })
});