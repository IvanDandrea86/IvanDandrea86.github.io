const menu = document.querySelector(".icon-one")
let toggle=()=>{
    menu.removeEventListener("click",toggle)
    console.log("activated")
    menu.classList.add("active-one")
    menu.addEventListener("click",()=>{
        menu.classList.remove("active-one")
        menu.addEventListener("click",toggle)
    })
}
menu.addEventListener("click",toggle)
