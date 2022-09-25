

window.addEventListener("load",iniciarCalculo)
//crema de verduras y legumbres
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
    //brocoli con patatas
let menu2={
    ing1:"aceite de oliva",
    cantidad1:9,
    ing2:"patata cruda",
    cantidad2:220,
    ing3:"brocoli crudo",
    cantidad3:80,
    }
    //ensalada de espinacas
let menu3={
    ing1:"miel",
    cantidad1:8,
    ing2:"mostaza",
    cantidad2:20,
    ing3:"vinagre",
    cantidad3:9,
    ing4:"mango crudo",
    cantidad4:50,
    ing5:"tomate maduro crudo",
    cantidad5:75,
    ing6:"nuez sin cascara",
    cantidad6:5,
    ing7:"espinaca cruda",
    cantidad7:50}
    //crema de zanahorias
    let menu4={
    ing1:"aceite de oliva virgen",
    cantidad1:9,
    ing2:"caldo vegetal",
    cantidad2:80,
    ing3:"apio crudo",
    cantidad3:30,
    ing4:"cebolla blanca",
    cantidad4:40,
    ing5:"zanahoria",
    cantidad5:150,}
    //ensalada de arroz casera
let menu5={
    ing1:"vinagre",
    cantidad1:9,
    ing2:"aceite de oliva virgen",
    cantidad2:9,
    ing3:"pepino",
    cantidad3:200,
    ing4:"tomate maduro",
    cantidad4:75,
    ing5:"mango",
    cantidad5:50,
    ing6:"lechuga",
    cantidad6:70,
    ing7:"arroz integral",
    cantidad7:50}
    //ensalada de pollo
let menu6={
    ing1:"diente de ajo",
    cantidad1:4,
    ing2:"huevo duro",
    cantidad2:40,
    ing3:"uva",
    cantidad3:30,
    ing4:"pollo",
    cantidad4:70,
    ing5:"aceitunas",
    cantidad5:9,
    ing6:"lechuga",
    cantidad6:47,
    ing7:"tomate",
    cantidad7:50,
    ing8:"chia",
    cantidad8:10}
    
function iniciarCalculo(){
    let reiniciar= document.getElementById("reiniciar")
    reiniciar.style.display="none"
    reiniciar.addEventListener("click",reiniciarCalculos)
    let botones= document.getElementById("botones")
    botones.style.display="none" 
     let seleccionarMenu= document.getElementById("seleccionar-menu")
    seleccionarMenu.style.display="none" 
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="block"
    let inputs= document.getElementById("inputs")
    inputs.style.display="block"
    let botonAceptar= document.getElementById("aceptar")
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="none"
    botonAceptar.addEventListener("click",detalleMenu)

 }
function detalleMenu(){
    let botones= document.getElementById("botones")
    botones.style.display="" 
    let botonMenu1 = document.getElementById("menu1")
    botonMenu1.addEventListener("click",calcularCalntidad1)
    let botonMenu2 = document.getElementById("menu2")
    botonMenu2.addEventListener("click",calcularCalntidad2)
    let botonMenu3 = document.getElementById("menu3")
    botonMenu3.addEventListener("click",calcularCalntidad3)
    let botonMenu4 = document.getElementById("menu4")
    botonMenu4.addEventListener("click",calcularCalntidad4)
    let botonMenu5 = document.getElementById("menu5")
    botonMenu5.addEventListener("click",calcularCalntidad5)
    let botonMenu6 = document.getElementById("menu6")
    botonMenu6.addEventListener("click",calcularCalntidad6)
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
   
}

function calcularCalntidad1(){
  
    let reiniciar= document.getElementById("reiniciar")
    reiniciar.style.display=""
    reiniciar.addEventListener("click",reiniciarCalculos)
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="flex"
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value
   
    let parrafo1 = document.getElementById("detalle-menu")
    parrafo1.innerHTML = menu1.ing1+"</br>"+menu1.ing2+"</br>"+menu1.ing3+"</br>"+menu1.ing4+"</br>"+menu1.ing5+"</br>"+menu1.ing6+"</br>"+menu1.ing7+"</br>"
    let parrafo2 = document.getElementById("cantidades-menu")
    parrafo2.innerHTML =  menu1.cantidad1+"g</br>"+menu1.cantidad2+"g</br>"+menu1.cantidad3+"g</br>"+menu1.cantidad4+"g</br>"+menu1.cantidad5+"g</br>"+menu1.cantidad6+"g</br>"+menu1.cantidad7+"g</br>"
      
    let resultado1 = menu1.cantidad1*porciones*semanas 
    let resultado2 = menu1.cantidad2*porciones*semanas 
    let resultado3 = menu1.cantidad3*porciones*semanas 
    let resultado4 = menu1.cantidad4*porciones*semanas 
    let resultado5 = menu1.cantidad5*porciones*semanas 
    let resultado6 = menu1.cantidad6*porciones*semanas 
    let resultado7 = menu1.cantidad7*porciones*semanas 
    
    let resultadoCalculo= document.getElementById("resultado-calculo")
    resultadoCalculo.innerHTML = resultado1 + "g</br>" + resultado2 + "g</br>"+ resultado3+ "g</br>"+ resultado4 + "g</br>"+resultado5 + "g</br>"+resultado6 + "g</br>"+resultado7 + "g</br>"

    let spanSemanas = document.getElementById("cantidad-de-semanas")
    spanSemanas.innerHTML = semanas
}

function calcularCalntidad2(){
  
    let reiniciar= document.getElementById("reiniciar")
    reiniciar.style.display=""
    reiniciar.addEventListener("click",reiniciarCalculos)
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="flex"
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value
   
    let parrafo1 = document.getElementById("detalle-menu")
    parrafo1.innerHTML = menu2.ing1+"</br>"+menu2.ing2+"</br>"+menu2.ing3
    let parrafo2 = document.getElementById("cantidades-menu")
    parrafo2.innerHTML =  menu2.cantidad1+"g</br>"+menu2.cantidad2+"g</br>"+menu2.cantidad3
      
    let resultado1 = menu2.cantidad1*porciones*semanas 
    let resultado2 = menu2.cantidad2*porciones*semanas 
    let resultado3 = menu2.cantidad3*porciones*semanas 
    let resultadoCalculo= document.getElementById("resultado-calculo")
    resultadoCalculo.innerHTML = resultado1 + "g</br>" + resultado2 + "g</br>"+ resultado3
    let spanSemanas = document.getElementById("cantidad-de-semanas")
    spanSemanas.innerHTML = semanas
}

function calcularCalntidad3(){
  
    let reiniciar= document.getElementById("reiniciar")
    reiniciar.style.display=""
    reiniciar.addEventListener("click",reiniciarCalculos)
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="flex"
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value
   
    let parrafo1 = document.getElementById("detalle-menu")
    parrafo1.innerHTML = menu3.ing1+"</br>"+menu3.ing2+"</br>"+menu3.ing3+"</br>"+menu3.ing4+"</br>"+menu3.ing5+"</br>"+menu3.ing6+"</br>"+menu3.ing7+"</br>"
    let parrafo2 = document.getElementById("cantidades-menu")
    parrafo2.innerHTML =  menu3.cantidad1+"g</br>"+menu3.cantidad2+"g</br>"+menu3.cantidad3+"g</br>"+menu3.cantidad4+"g</br>"+menu3.cantidad5+"g</br>"+menu3.cantidad6+"g</br>"+menu3.cantidad7+"g</br>"
      
    let resultado1 = menu3.cantidad1*porciones*semanas 
    let resultado2 = menu3.cantidad2*porciones*semanas 
    let resultado3 = menu3.cantidad3*porciones*semanas 
    let resultado4 = menu3.cantidad4*porciones*semanas 
    let resultado5 = menu3.cantidad5*porciones*semanas 
    let resultado6 = menu3.cantidad6*porciones*semanas 
    let resultado7 = menu3.cantidad7*porciones*semanas 
    let resultadoCalculo= document.getElementById("resultado-calculo")
    resultadoCalculo.innerHTML = resultado1 + "g</br>" + resultado2 + "g</br>"+ resultado3+ "g</br>"+ resultado4 + "g</br>"+resultado5 + "g</br>"+resultado6 + "g</br>"+resultado7 + "g</br>"
    let spanSemanas = document.getElementById("cantidad-de-semanas")
    spanSemanas.innerHTML = semanas
}
function calcularCalntidad4(){
  
    let reiniciar= document.getElementById("reiniciar")
    reiniciar.style.display=""
    reiniciar.addEventListener("click",reiniciarCalculos)
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="flex"
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value
   
    let parrafo1 = document.getElementById("detalle-menu")
    parrafo1.innerHTML = menu4.ing1+"</br>"+menu4.ing2+"</br>"+menu4.ing3+"</br>"+menu4.ing4+"</br>"+menu4.ing5
    let parrafo2 = document.getElementById("cantidades-menu")
    parrafo2.innerHTML =  menu4.cantidad1+"g</br>"+menu4.cantidad2+"g</br>"+menu4.cantidad3+"g</br>"+menu4.cantidad4+"g</br>"+menu4.cantidad5
      
    let resultado1 = menu4.cantidad1*porciones*semanas 
    let resultado2 = menu4.cantidad2*porciones*semanas 
    let resultado3 = menu4.cantidad3*porciones*semanas 
    let resultado4 = menu4.cantidad4*porciones*semanas 
    let resultado5 = menu4.cantidad5*porciones*semanas 
    let resultadoCalculo= document.getElementById("resultado-calculo")
    resultadoCalculo.innerHTML = resultado1 + "g</br>" + resultado2 + "g</br>"+ resultado3+ "g</br>"+ resultado4 + "g</br>"+resultado5 + "g</br>"
    let spanSemanas = document.getElementById("cantidad-de-semanas")
    spanSemanas.innerHTML = semanas
}

function calcularCalntidad5(){
  
    let reiniciar= document.getElementById("reiniciar")
    reiniciar.style.display=""
    reiniciar.addEventListener("click",reiniciarCalculos)
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="flex"
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value
   
    let parrafo1 = document.getElementById("detalle-menu")
    parrafo1.innerHTML = menu5.ing1+"</br>"+menu5.ing2+"</br>"+menu5.ing3+"</br>"+menu5.ing4+"</br>"+menu5.ing5+"</br>"+menu5.ing6+"</br>"+menu5.ing7+"</br>"
    let parrafo2 = document.getElementById("cantidades-menu")
    parrafo2.innerHTML =  menu5.cantidad1+"g</br>"+menu5.cantidad2+"g</br>"+menu5.cantidad3+"g</br>"+menu5.cantidad4+"g</br>"+menu5.cantidad5+"g</br>"+menu5.cantidad6+"g</br>"+menu5.cantidad7+"g</br>"
      
    let resultado1 = menu5.cantidad1*porciones*semanas 
    let resultado2 = menu5.cantidad2*porciones*semanas 
    let resultado3 = menu5.cantidad3*porciones*semanas 
    let resultado4 = menu5.cantidad4*porciones*semanas 
    let resultado5 = menu5.cantidad5*porciones*semanas 
    let resultado6 = menu5.cantidad6*porciones*semanas 
    let resultado7 = menu5.cantidad7*porciones*semanas 
    let resultadoCalculo= document.getElementById("resultado-calculo")
    resultadoCalculo.innerHTML = resultado1 + "g</br>" + resultado2 + "g</br>"+ resultado3+ "g</br>"+ resultado4 + "g</br>"+resultado5 + "g</br>"+resultado6 + "g</br>"+resultado7 + "g</br>"
    let spanSemanas = document.getElementById("cantidad-de-semanas")
    spanSemanas.innerHTML = semanas
}

function calcularCalntidad6(){
    
    let reiniciar= document.getElementById("reiniciar")
    reiniciar.style.display=""
    reiniciar.addEventListener("click",reiniciarCalculos)
    let seleccionarPorciones= document.getElementById("seleccionar-porciones")
    seleccionarPorciones.style.display="none"
    let inputs= document.getElementById("inputs")
    inputs.style.display="none"
    let titulosColumnas= document.getElementById("titulos-de-columnas")
    titulosColumnas.style.display="flex"
    let inputSemamas = document.getElementById("inputsemanas")
    let inputPorciones = document.getElementById("inputporciones")
    let porciones = inputPorciones.value     
    let semanas = inputSemamas.value
   
    let parrafo1 = document.getElementById("detalle-menu")
    parrafo1.innerHTML = menu6.ing1+"</br>"+menu6.ing2+"</br>"+menu6.ing3+"</br>"+menu6.ing4+"</br>"+menu6.ing5+"</br>"+menu6.ing6+"</br>"+menu6.ing7+"</br>"+menu6.ing8
    let parrafo2 = document.getElementById("cantidades-menu")
    parrafo2.innerHTML =  menu6.cantidad1+"g</br>"+menu6.cantidad2+"g</br>"+menu6.cantidad3+"g</br>"+menu6.cantidad4+"g</br>"+menu6.cantidad5+"g</br>"+menu6.cantidad6+"g</br>"+menu6.cantidad7+"g</br>"+menu6.cantidad8
      
    let resultado1 = menu6.cantidad1*porciones*semanas 
    let resultado2 = menu6.cantidad2*porciones*semanas 
    let resultado3 = menu6.cantidad3*porciones*semanas 
    let resultado4 = menu6.cantidad4*porciones*semanas 
    let resultado5 = menu6.cantidad5*porciones*semanas 
    let resultado6 = menu6.cantidad6*porciones*semanas 
    let resultado7 = menu6.cantidad7*porciones*semanas 
    let resultado8 = menu6.cantidad8*porciones*semanas 
    let resultadoCalculo= document.getElementById("resultado-calculo")
    resultadoCalculo.innerHTML = resultado1 + "g</br>" + resultado2 + "g</br>"+ resultado3+ "g</br>"+ resultado4 + "g</br>"+resultado5 + "g</br>"+resultado6 + "g</br>"+resultado7 + "g</br>"+resultado8
    let spanSemanas = document.getElementById("cantidad-de-semanas")
    spanSemanas.innerHTML = semanas
}

function reiniciarCalculos(){
    location.reload()
}

