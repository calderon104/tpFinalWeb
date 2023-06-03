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

/*validacion de email*/
function verificarEmail(){
    var form= document.getElementById("formulario");
    var email= document.getElementById("gmail").value;
    var text= document.getElementById("text");
    let pattern= /^\w+@\w+(\.\w{2,4})+$/;
    let patter6= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (patter6.test(email)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML="Email valido";
      text.style.color="#00ff00";
    }
    else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML="Email invalido";
      text.style.color="#ff0000";
    }
    if (email==""){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML="";
      text.style.color="#00ff00";
    }
  }




  /*validacion de nombre */
  function verificarNombre(){
    var nom= document.getElementById("fname").value;
    var texto=document.getElementById("textNombre");
    let aux= /^[a-zA-Z]{1,15}$/;
    if(aux.test(nom)){
        texto.innerHTML="Nombre valido";
        texto.style.color="#00ff00";
        
    }else if(nom.length>15){
        texto.innerHTML="Ingrese menos de 15 letras!"
        texto.style.color="#ff0000";
    }
    else {
        texto.innerHTML="Ingrese solo letras";
        texto.style.color="#ff0000";
    }
    if(nom=""){
        texto.innerHTML="";
    }
  }
  /*validacion de apellido */
  function verificarApellido(){
    var apell= document.getElementById("lname").value;
    var texto=document.getElementById("textApellido");
    let aux= /^[a-zA-Z]{1,15}$/;
    if(aux.test(apell)){
        texto.innerHTML="Apellido valido";
        texto.style.color="#00ff00";
    }
    else {
        texto.innerHTML="Ingrese letras";
        texto.style.color="#ff0000";
    }
    if(apell=""){
        texto.innerHTML="";
    }
  }
  /*validacion de planta */
  function verificarPlanta(){
    var plant= document.getElementById("plant").value;
    var texto=document.getElementById("textPlanta");
    let aux= /^[a-zA-Z]{1,15}$/;
    if(aux.test(plant)){
        texto.innerHTML="Planta valido";
        texto.style.color="#00ff00";
    }
    else {
        texto.innerHTML="Ingrese letras";
        texto.style.color="#ff0000";
    }
    if(plant=""){
        texto.innerHTML="";
    }
}

//JESUS LORD HELP MEEEEEEEEEEEEE 
var result= document.getElementById("resultados");
let exR_emails = /^\w+@\w+(\.\w{2,4})+$/;
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
    error=true;
  }
  if(nombre.value>15){
    let p= document.createElement("p");
    p.innerHTML="Maximo de caracteres en nombre es 15";
    errores.appendChild(p);
    error=true;
  }
  if(apellido.value==""){
    let p= document.createElement("p");
    p.innerHTML="Falta el apellido";
    errores.appendChild(p);
    error=true;
  }
  if(apellido.value>15){
    let p= document.createElement("p");
    p.innerHTML="Maximo de caracteres en apellido es 15";
    errores.appendChild(p);
    error=true;
  }
  if(exR_emails.test(email)){
    let p= document.createElement("p");
    p.innerHTML= "Email invalido";
    errores.appendChild(p);
    error=true;
  }
  if(email.value==""){
    let p= document.createElement("p");
    p.innerHTML="Email vacio"
    errores.appendChild(p);
    error=true;
  }
  if(planta.value==""){
    let p= document.createElement("p");
    p.innerHTML= "Falta ingresar la planta";
    errores.appendChild(p);
    error=true;
  }
  if(planta.value>15){
    let p= document.createElement("p");
    p.innerHTML= "Solo se permite hasta 15 caracteres de planta";
    errores.appendChild(p);
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
  }
  return false;
}