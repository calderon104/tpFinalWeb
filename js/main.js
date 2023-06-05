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

//JESUS LORD HELP MEEEEEEEEEEEEE 
let exR_emails= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
function validarCampos(){
  let nombre= document.querySelector("#fname");
  nombre.classList.remove("error");
  let apellido= document.querySelector("#lname");
  apellido.classList.remove("error");
  let email= document.querySelector("#gmail");
  email.classList.remove("error");
  let planta= document.querySelector("#plant");
  planta.classList.remove("error");
  let errores= document.querySelector("#errores")
  let respuesta= document.querySelector("#resultados")
  errores.innerHTML="";
  errores.style.display="none";
  let error=false;
  if(nombre.value==""){
    let p= document.createElement("p");
    p.innerHTML="Falta el nombre";
    errores.appendChild(p);
    nombre.classList.add("error");
    error=true;
  }
  if(nombre.value>15){
    let p= document.createElement("p");
    p.innerHTML="Maximo de caracteres en nombre es 15";
    errores.appendChild(p);
    nombre.classList.add("error");
    error=true;
  }
  if(apellido.value==""){
    let p= document.createElement("p");
    p.innerHTML="Falta el apellido";
    apellido.classList.add("error")
    errores.appendChild(p);
    error=true;
  }
  if(apellido.value>15){
    let p= document.createElement("p");
    p.innerHTML="Maximo de caracteres en apellido es 15";
    apellido.classList.add("error");
    errores.appendChild(p);
    error=true;
  }
  if(!exR_emails.test(email.value)){
    let p= document.createElement("p");
    p.innerHTML= "Email invalido";
    email.classList.add("error");
    errores.appendChild(p);
    error=true;
  }
  if(email.value==""){
    let p= document.createElement("p");
    p.innerHTML="Email vacio"
    errores.appendChild(p);
    email.classList.add("error");
    error=true;
  }
  if(planta.value==""){
    let p= document.createElement("p");
    p.innerHTML= "Falta ingresar la planta";
    errores.appendChild(p);
    planta.classList.add("error");
    error=true;
  }
  if(planta.value>15){
    let p= document.createElement("p");
    p.innerHTML= "Solo se permite hasta 15 caracteres de planta";
    errores.appendChild(p);
    planta.classList.add("error");
    error=true;
  }
  if(error){
    errores.style.display="initial";
    return false;
  }else {
    let msj =document.createElement("h3");
    msj.textContent="Recomendacion recibida ";
    let p= document.createElement("p");
    p.textContent="Nombre: "+ nombre.value;
    let p1= document.createElement("p");
    p1.textContent="Apellido: "+ apellido.value;
    let p2= document.createElement("p");
    p2.textContent="Contacto: "+ email.value;
    let p3= document.createElement("p");
    p3.textContent="Planta: "+ planta.value;
    let msjContenedor= document.createElement("div");
    msjContenedor.classList.add("msjContenedor");
    msjContenedor.appendChild(msj);
    msjContenedor.appendChild(p);
    msjContenedor.appendChild(p1);
    msjContenedor.appendChild(p2);
    msjContenedor.appendChild(p3);
    respuesta.appendChild(msjContenedor);
    document.forms["f_contacto"].reset();
    let fcs= document.querySelector("form input");
    fcs.focus();
  }
  return false;
}