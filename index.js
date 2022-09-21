const { map } = require("johnny-five/lib/board")

window.addEventListener("load",iniciarCalculo)
let menu1={
    ing1:"palta",
    cantidad1:25,
    ing2:"pan",
    cantidad2:50,
    ing3:"rucula",
    cantidad3:60,
    ing4:"parmesano",
    cantidad5:80
}
let menu2=[{ing1:"asdasd",cantidad1:40}]
menu2.map(function(x){
    return x

})

function iniciarCalculo(){
    let botonMenu1 = document.getElementById("menu1")
    botonMenu1.innerHTML = "nuevo menu"
    botonMenu1.addEventListener("click",detalleMenu1)
}
function detalleMenu1(){
    
    
    let parrafo = document.getElementById("detalle-menu")
    parrafo.innerHTML=menu1
    
    calcularCalntidad()
}
function calcularCalntidad(){
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value     
    
console.log(porciones*semanas)
}

