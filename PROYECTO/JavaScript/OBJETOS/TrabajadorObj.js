// TRABAJADORES
function Trabajador(nombre, apellido, tel, gmail) {
    // PROPIEDADES
    this.nombre = nombre;
    this.apellido = apellido;
    this.tel = tel;
    this.gmail = gmail;


    //Cambiamos los atributos que si pueden cambiar
    this.modificarTel = function(tel){
        this.tel = tel;
    }

    this.modificarGmail = function(gmail){
        this.gmail = gmail;
    }

    //Imprimimos
    this.imprimeNombre = function(){
         return this.nombre;
    }

    this.imprimeApellido = function(){
        return this.apellido;
    }

    this.imprimeTel = function(){
        return this.tel;
   }

   this.imprimeGmail = function(){
       return this.gmail;
   }
}

// Simularemos la base de datos con objetos creados


var trabajador1 = new Trabajador("Gonzalo", "Aparicio", "123456789", "gonzalo.20@gmail.com");
var trabajador2 = new Trabajador("Zalo", "Paricio", "9876543321", "paricio.20@gmail.com");

// Muestro los objetos en el html

    var Gonzalo = document.getElementById("trabajador1");
    var Zalo = document.getElementById("trabajador2");

    Gonzalo.innerHTML= trabajador1.imprimeNombre() +" "+trabajador1.imprimeApellido();
    Zalo.innerHTML= trabajador2.imprimeNombre() +" "+trabajador2.imprimeApellido();
