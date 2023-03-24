const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')


const dark = localStorage.getItem("mode")

if(dark){
    darkMode()
}

function darkMode(){
    darkBtn.classList.toggle("hidden")
    lightBtn.classList.toggle("hidden")
    body.classList.toggle("dark-mode")
}

darkBtn.addEventListener("click", ()=>{
    darkMode()
    localStorage.setItem("mode", "dark-mode")
})

lightBtn.addEventListener("click", ()=>{
    darkMode()
    localStorage.setItem("mode", "")
})