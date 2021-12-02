// SERVICIOS
function Servicio(nombre, precio, tipo) {
    // PROPIEDADES
    this.nombre = nombre;
    this.precio = precio;
    this.tipo = tipo; // servicio - ritual 

    //Cambiamos los atributos que si pueden cambiar


    this.modificarPrecio = function(precio){
        this.precio = precio;
    }

    //Imprimimos
    this.imprimeNombre = function(){
         return this.nombre;
    }

    this.imprimePrecio = function(){
        return this.precio;
    }

    this.imprimeTipo = function(){
        return this.tipo;
    }

}

// Simularemos la base de datos con objetos creados

var corte1 = new Servicio("Corte", "10");
var corte2 = new Servicio("Corte", "15");
var corte3 = new Servicio("Corte", "12");
var corte4 = new Servicio("Corte", "11");
var barba1 = new Servicio("Barba", "3");
var barba2 = new Servicio("Barba", "8");
var tinte1 = new Servicio("Blanco", "40");
var tinte2 = new Servicio("Azul", "25");
var tinte3 = new Servicio("Multicolor", "35");
var tinte4 = new Servicio("Verde", "20");

// Muestro los objetos en el html
// NOMBRE

var Corte1Nombre = document.getElementById("Corte1Nombre");
var Corte2Nombre = document.getElementById("Corte2Nombre");
var Corte3Nombre = document.getElementById("Corte3Nombre");
var Corte4Nombre = document.getElementById("Corte4Nombre");
var Barba1Nombre = document.getElementById("Barba1Nombre");
var Barba2Nombre = document.getElementById("Barba2Nombre");
var Tinte1Nombre = document.getElementById("Tinte1Nombre");
var Tinte2Nombre = document.getElementById("Tinte2Nombre");
var Tinte3Nombre = document.getElementById("Tinte3Nombre");
var Tinte4Nombre = document.getElementById("Tinte4Nombre");


Corte1Nombre.innerHTML= corte1.imprimeNombre();
Corte2Nombre.innerHTML= corte2.imprimeNombre();
Corte3Nombre.innerHTML= corte3.imprimeNombre();
Corte4Nombre.innerHTML= corte4.imprimeNombre();
Barba1Nombre.innerHTML= barba1.imprimeNombre();
Barba2Nombre.innerHTML= barba2.imprimeNombre();
Tinte1Nombre.innerHTML= tinte1.imprimeNombre();
Tinte2Nombre.innerHTML= tinte2.imprimeNombre();
Tinte3Nombre.innerHTML= tinte3.imprimeNombre();
Tinte4Nombre.innerHTML= tinte4.imprimeNombre();

// PRECIO

var Corte1Precio = document.getElementById("Corte1Precio");
var Corte2Precio = document.getElementById("Corte2Precio");
var Corte3Precio = document.getElementById("Corte3Precio");
var Corte4Precio = document.getElementById("Corte4Precio");
var Barba1Precio = document.getElementById("Barba1Precio");
var Barba2Precio = document.getElementById("Barba2Precio");
var Tinte1Precio = document.getElementById("Tinte1Precio");
var Tinte2Precio = document.getElementById("Tinte2Precio");
var Tinte3Precio = document.getElementById("Tinte3Precio");
var Tinte4Precio = document.getElementById("Tinte4Precio");


Corte1Precio.innerHTML= corte1.imprimePrecio() + "&#8364;";
Corte2Precio.innerHTML= corte2.imprimePrecio() + "&#8364;";
Corte3Precio.innerHTML= corte3.imprimePrecio() + "&#8364;";
Corte4Precio.innerHTML= corte4.imprimePrecio() + "&#8364;";
Barba1Precio.innerHTML=barba1.imprimePrecio() + "&#8364;";
Barba2Precio.innerHTML= barba2.imprimePrecio() + "&#8364;";
Tinte1Precio.innerHTML=tinte1.imprimePrecio() + "&#8364;";
Tinte2Precio.innerHTML= tinte2.imprimePrecio() + "&#8364;";
Tinte3Precio.innerHTML=tinte3.imprimePrecio() + "&#8364;";
Tinte4Precio.innerHTML= tinte4.imprimePrecio() + "&#8364;";