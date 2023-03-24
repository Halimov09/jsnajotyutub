// api
const API = "https://randomuser.me/api/?results=9";

// for leader
const overlay = document.getElementById("overlay");


const togl = (togle) =>{
    if(togle){
        overlay.classList.remove("hidden")
    }else{
        overlay.classList.add("hidden")
    }
}

const getTodos = (resourse) => {
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest

        request.addEventListener("readystatechange", ()=>{
            if (request.readyState < 4) {
                togl(true)
            }else if(request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                resolve(data.results);
                togl(false)
            }else{
                togl(false)
                reject("error !!!")
            }
        })
        request.open("GET", resourse)
        request.send()
    })
}


const reload = () =>{
    getTodos(API).then((data) =>{
        updateUi(data);
    }).catch((error) =>{
        console.log(error);
    })
}

document.addEventListener("DOMContentLoaded", ()=>{
   reload()
})