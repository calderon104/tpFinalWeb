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
function validarTodo(){
    document.getElementById("formulario").addEventListener("submit",function(e){
        e.preventDefault();
    })
    var expRmail= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var expRletra=/^[a-zA-Z]{1,10}$/;
    var nombre=document.getElementById("fname").value;
    var apellido=document.getElementById("lname").value;
    var gmail =document.getElementById("gmail").value;
    var plant= document.getElementById("plant").value;
    if(!expRletra.test(nombre || nombre!="")){
        
    }else 
    if(!expRletra.test(apellido|| apellido!="")){
        
    }else
    if(!expRletra.test(plant|| plant!="")){
        
    }else
    if(!expRmail.test(gmail|| gmail!="")){
        
    }else
    if(expRletra.test(nombre)&&expRletra.test(apellido)&&expRletra.test(plant)&&expRmail.test(gmail)){
        var result= document.getElementById("resultados");
        result.innerHTML="";
        var texto=document.createElement("h3");
        var text1=document.createElement("li");
        var text2=document.createElement("li");
        var text3=document.createElement("li");
        var text4=document.createElement("li");
        texto.textContent="Datos ingresados correctamente"
        text1.textContent="Nombre: "+ nombre;
        text2.textContent="Apellido: "+ apellido;
        text3.textContent="Gmail: "+ gmail;
        text4.textContent="Planta: "+ plant;
        result.appendChild(texto);
        result.appendChild(text1);
        result.appendChild(text2);
        result.appendChild(text3);
        result.appendChild(text4);
        /*result2.textContent= "Nombre "+ nombre +"/ "+ "Apellido " +apellido +"/" +"Planta ingresada: "+plant+ "/"+ "Su correo: "+gmail;
        result.appendChild(result2);*/
    }
}