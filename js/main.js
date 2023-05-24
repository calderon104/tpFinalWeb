var imagenes=["imgCarrusel/imgCarrusel1.png","imgCarrusel/imgCarrusel2.jpg", "imgCarrusel/imgCarrusel3.png"];
var cont = 0;
function imagenAnt(){
    if(cont>0){
        cont--;
    }else{
        cont = imagenes.length-1;
    }
    verFoto();
}
function imagenSig(){
    if (cont<imagenes.length-1) {
        cont++;
    }else{
        cont = 0;
    }
    verFoto();
}
function verFoto(){
    var fotoAct = document.getElementById("imagenCarrusel");
    fotoAct.src = imagenes[cont];
}
/*CARRUSEL HASTA ACA */