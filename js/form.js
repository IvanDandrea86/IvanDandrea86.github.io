const btn1=document.getElementById("contact-me")
const close=document.getElementById("close")
const popUp= document.getElementById("contact") 

let openForm=()=> {
    btn1.removeEventListener("click",openForm)
    console.log("open")
    popUp.style.display = "block";
    close.addEventListener("click",()=>{
        closeForm();
    })
  }
let closeForm=()=> {
    console.log("close")
    popUp.style.display = "none";
    btn1.addEventListener("click",()=>{
        openForm();
    })
  }
btn1.addEventListener("click",   openForm)
