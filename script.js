// Ventana modal
const modal = document.getElementById("ventanaModal");

// Span de cierre
const btnCerrar = document.querySelector(".cerrar-modal");

// Seleccionar todos los elementos con la clase "abrirModal"
const botonesIniciarSesion = document.querySelectorAll(".abrirModal");



const open1= document.getElementById ('open1');
const modal_container1= document.getElementById('modal_container1');

const open2= document.getElementById ('open2');
const modal_container2= document.getElementById('modal_container2');

const open3= document.getElementById ('open3');
const modal_container3= document.getElementById('modal_container3');

const open4= document.getElementById ('open4');
const modal_container4= document.getElementById('modal_container4');


const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");
const close4 = document.querySelector(".close4");



const opendep= document.querySelectorAll ('.opendep');
const modal_depiladores= document.getElementById('modal_depiladores');


const closedep= document.querySelector(".closedep");





// Iterar sobre cada botón y agregar un evento de click a cada boton
botonesIniciarSesion.forEach(function (boton) {
  boton.addEventListener("click", function () {
    modal.style.display = "block"
  });
});

// Cerrar el modal
btnCerrar.addEventListener("click", function () {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


open1.addEventListener("click", function (){
    modal_container1.style.display="flex";
  });


  open2.addEventListener("click", function (){
    modal_container2.style.display="flex";
  });


  open3.addEventListener("click", function (){
    modal_container3.style.display="flex";
  });


  open4.addEventListener("click", function (){
    modal_container4.style.display="flex";
  });




close1.addEventListener("click", function () {
    modal_container1.style.display = "none"
  });
close2.addEventListener("click", function () {
    modal_container2.style.display = "none"
  });

close3.addEventListener("click", function () {
    modal_container3.style.display = "none"
  });

close4.addEventListener("click", function () {
    modal_container4.style.display = "none"
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal_container1) {
      modal_container1.style.display = "none";
    }
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal_container2) {
      modal_container2.style.display = "none";
    }
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal_container3) {
      modal_container3.style.display = "none";
    }
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal_container4) {
      modal_container4.style.display = "none";
    }
  });







  opendep.forEach(function (boton) {
    boton.addEventListener("click", function () {
      modal_depiladores.style.display = "flex"
    });
  });

  closedep.addEventListener("click", function () {
    modal_depiladores.style.display = "none"
  });


