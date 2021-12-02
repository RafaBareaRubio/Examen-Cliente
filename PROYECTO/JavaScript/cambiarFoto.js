window.addEventListener('load',function(){

    var imagenes = [];

    imagenes[0] = '../images/INDEX/IniciarS.jpg';
    imagenes[1] = '../images/INDEX/peluqueria1.jpg';
    imagenes[2] = '../images/INDEX/peluqueria2.jpg';

    var indiceImagenes = 0;

    function cambiarImagenes(){
        document.slider.src = imagenes[indiceImagenes];

        if(indiceImagenes < imagenes.length-1){
            indiceImagenes++;
        }else{
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes,3000)
});