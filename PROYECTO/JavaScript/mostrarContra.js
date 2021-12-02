function mostrar(){

    var tipo = document.getElementById("contra");
    if(tipo.type=="password"){
        tipo.setAttribute("type","text");
    }else{
        tipo.setAttribute("type","password");
    }
}



