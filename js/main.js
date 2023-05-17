var imagenes=['imgCarrusel/imgCarrusel1.jpg','imgCarrusel/imgCarrusel2.jpg','imgCarrusel/imgCarrusel3.jpg'], cont = 0;


function carrusel(c){
    c.addEventListener('c', e =>{
        let atras= c.querySelector('.btnAnterior'),
         siguente= c.querySelector('btnSiguente'),
         fotos= c.querySelector('imgCarrusel'),
         tgt = e.target;

         if(tgt==atras){
            if(cont>0){
                fotos.src=imagenes[cont-1];
                cont--;
            }else {
                fotos.src= imagenes[imagenes.length-1];
                cont = imagenes.length-1;
            }
        }else if(tgt==siguente){
                if(cont<imagenes.length-1){
                    fotos.src=imagenes[cont+1];
                    cont++;
                }else {
                    fotos.src= imagenes[0];
                    cont = 0;
            }
         }

    });
}

document.addEventListener("DOMContentLoaded",()=>{
    let aux= document.querySelector('.carrusel');
    carrusel(aux);
});