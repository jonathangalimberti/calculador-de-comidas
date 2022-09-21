

window.addEventListener("load",iniciarCalculo)
let menu1={
    ing1:"guisante",
    cantidad1:25,
    ing2:"lentejas",
    cantidad2:50,
    ing3:"apio",
    cantidad3:30,
    ing4:"cebolla blanca",
    cantidad4:50,
    ing5:"tomate",
    cantidad5:50,
    ing6:"zanahoria",
    cantidad6:50,
    ing7:"papa",
    cantidad7:50}




function iniciarCalculo(){
    let botonMenu1 = document.getElementById("menu1")
    botonMenu1.innerHTML = "crema de verduras y legumbres"
    botonMenu1.addEventListener("click",detalleMenu1)
    /* let seleccionarMenu= document.getElementById("seleccionar-menu")
    seleccionarMenu.style.display="none" */
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="none"
}
function detalleMenu1(){
     let botones= document.getElementById("botones")
    botones.style.display="none" 
     let seleccionarMenu= document.getElementById("seleccionar-menu")
    seleccionarMenu.style.display="none" 
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="block"
    let inputs= document.getElementById("inputs")
    inputs.style.display="block"
    let botonAceptar= document.getElementById("aceptar")
    botonAceptar.addEventListener("click",calcularCalntidad)
    
   
}

function calcularCalntidad(){
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="flex"
    
    let parrafo1 = document.getElementById("detalle-menu")
    parrafo1.innerHTML = menu1.ing1+"</br>"+menu1.ing2+"</br>"+menu1.ing3+"</br>"+menu1.ing4+"</br>"+menu1.ing5+"</br>"+menu1.ing6+"</br>"+menu1.ing7+"</br>"
    let parrafo2 = document.getElementById("cantidades-menu")
    parrafo2.innerHTML =  menu1.cantidad1+"g</br>"+menu1.cantidad2+"g</br>"+menu1.cantidad3+"g</br>"+menu1.cantidad4+"g</br>"+menu1.cantidad5+"g</br>"+menu1.cantidad6+"g</br>"+menu1.cantidad7+"g</br>"
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value     
    let resultado1 = menu1.cantidad1*porciones*semanas 
    let resultado2 = menu1.cantidad2*porciones*semanas 
    let resultado3 = menu1.cantidad3*porciones*semanas 
    let resultado4 = menu1.cantidad4*porciones*semanas 
    let resultado5 = menu1.cantidad5*porciones*semanas 
    let resultado6 = menu1.cantidad6*porciones*semanas 
    let resultado7 = menu1.cantidad7*porciones*semanas 
    imprimirResultado(resultado1,resultado2,resultado3,resultado4,resultado5,resultado6,resultado7)
}

function imprimirResultado(resultado1,resultado2,resultado3,resultado4,resultado5,resultado6,resultado7){

let resultadoCalculo= document.getElementById("resultado-calculo")
resultadoCalculo.innerHTML = resultado1 + "g</br>" + resultado2 + "g</br>"+ resultado3+ "g</br>"+ resultado4 + "g</br>"+resultado5 + "g</br>"+resultado6 + "g</br>"+resultado7 + "g</br>"
}

