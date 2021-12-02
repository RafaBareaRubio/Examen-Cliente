// PRODUCTOS
function Producto(nombre, precio) {
    // PROPIEDADES
    this.nombre = nombre;
    this.precio = precio;

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

}

// Simularemos la base de datos con objetos creados


var producto1 = new Producto("Champu", "10");
var producto2 = new Producto("Champu", "15");
var producto3 = new Producto("Champu", "12");
var producto4 = new Producto("Fijador", "11");
var producto5 = new Producto("Fijador", "10");
var producto6 = new Producto("Cosas", "32");
var producto7 = new Producto("Maquinilla", "25");
var producto8 = new Producto("Cuchilla", "7");

// Muestro los objetos en el html
// NOMBRE

var Champu1Nombre = document.getElementById("Champu1Nombre");
var Champu2Nombre = document.getElementById("Champu2Nombre");
var Champu3Nombre = document.getElementById("Champu3Nombre");
var Fijador1Nombre = document.getElementById("Fijador1Nombre");
var Fijador2Nombre = document.getElementById("Fijador2Nombre");
var CosasNombre = document.getElementById("CosasNombre");
var MaquinillaNombre = document.getElementById("MaquinillaNombre");
var CuchillaNombre = document.getElementById("CuchillaNombre");


Champu1Nombre.innerHTML= producto1.imprimeNombre();
Champu2Nombre.innerHTML= producto2.imprimeNombre();
Champu3Nombre.innerHTML= producto3.imprimeNombre();
Fijador1Nombre.innerHTML= producto4.imprimeNombre();
Fijador2Nombre.innerHTML= producto5.imprimeNombre();
CosasNombre.innerHTML= producto6.imprimeNombre();
MaquinillaNombre.innerHTML= producto7.imprimeNombre();
CuchillaNombre.innerHTML= producto8.imprimeNombre();

// PRECIO

var Champu1Precio = document.getElementById("Champu1Precio");
var Champu2Precio = document.getElementById("Champu2Precio");
var Champu3Precio = document.getElementById("Champu3Precio");
var Fijador1Precio = document.getElementById("Fijador1Precio");
var Fijador2Precio = document.getElementById("Fijador2Precio");
var CosasPrecio = document.getElementById("CosasPrecio");
var MaquinillaPrecio = document.getElementById("MaquinillaPrecio");
var CuchillaPrecio = document.getElementById("CuchillaPrecio");



Champu1Precio.innerHTML= producto1.imprimePrecio() + "&#8364;";
Champu2Precio.innerHTML= producto2.imprimePrecio() + "&#8364;";
Champu3Precio.innerHTML= producto3.imprimePrecio() + "&#8364;";
Fijador1Precio.innerHTML= producto4.imprimePrecio() + "&#8364;";
Fijador2Precio.innerHTML=producto5.imprimePrecio() + "&#8364;";
CosasPrecio.innerHTML= producto6.imprimePrecio() + "&#8364;";
MaquinillaPrecio.innerHTML=producto7.imprimePrecio() + "&#8364;";
CuchillaPrecio.innerHTML= producto8.imprimePrecio() + "&#8364;";
