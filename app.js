// let nombre=prompt("ingrese su nombre")
// alert ("Hola "+ nombre)

// nombre=prompt("ingrese su apellido")
// alert ("Sr(a) "+ nombre)

// function saludar(nombre) {
//     console.log("¡Hola, mundo !"+nombre+"!");
// }

// saludar("Ana");   // Imprime "¡Hola, mundo!"


// // Imprimir mensajes en la consola
// console.log("Mensaje de depuración");
// console.error("Mensaje de error");
// console.warn("Mensaje de advertencia");

// function sumar(a, b) {
//     return a + b;
// }
// a=parseFloat(prompt("ingrese num1"))
// b=parseFloat(prompt("ingrese num2"))

// let resultado = sumar(a, b);
// alert(resultado);  // Imprime 8

// let saludo = function() {
//     console.log("Hola desde una función anónima");
// };

// saludo();  // Imprime "Hola desde una función anónima"

// let multiplicar = (x, y) => x * y;

// console.log(multiplicar(4, 5));  // Imprime 20
            
function cambiarDom(){
    const titutlo1=document.getElementById("titulo1")
    const titulo2=document.getElementById("titulo2")
    const parrafo1=document.getElementById("parrafo1")
    const parrafo2=document.getElementById("parrafo2")

}
cambiarDom()

function cambiarDom(){
    const titutlo1=document.getElementById("titulo1")
    const titulo2=document.getElementById("titulo2")
    const parrafo1=document.getElementById("parrafo1")
    const parrafo2=document.getElementById("parrafo2")
console.log(parrafo1)

titulo1.textcontent="cambio"
parrafo1.innerHTML="nuevotextodeelparrafo"
}
function otrafuncion(){
    const contenedor2=document.getElementById("contenedor2")
    contenedor2.innerHTML="<h1 id='titulo3'>titulo de innerhtml</h1> <p>parrafo de html</p>";
}
function estilo(){
    const caja=document.querySelector("miclase");
    caja.style.backgroundcolor="red";
    
}
// function cambiarruta(){
    const enlace=document.querySelector("a")
    enlace.setAttribute("href", "https://campus.talentotechoriente.com/#/private/detail-lesson-student/7725")


function cambiarruta(){
   window.location.href="https://campus.talentotechoriente.com/#/private/detail-lesson-student/7725";
 
}

const contenedor2=document.getElementById("contenedor")
function ocultar(){
    contenedor2.classlist.toggle("oculto")
}

function cambiar(){
    contenedor2.classlist.toogle("secundaria")
contenedor.style.marginleft="400px"
}
function mover(){
    contenedor2.style.marginleft="8px"
    contenedor2.style.backgroundcolor="red"
    const nuevodDiv=document.createElement("div");
    nuevodDiv.textContent="Soy un nuevo DIV";
    document.body.appendChild(nuevodDiv);
}