// ******* VALIDACIÓN DEL FORMULARIO ******

// Traer los elementos
let btnEnviar = document.getElementById("btnEnviar");
let btnReset = document.getElementById("btnReset");

let txtNombre = document.getElementById("Nombre");
let txtApellido = document.getElementById("Apellido");
let txtEmail = document.getElementById("email");
let txtMensaje = document.getElementById("mensaje");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let isValid = true;
let valEmail = false;

let nombreVal = false;
let apellidoVal = false;
let emailVal = false;
let mensajeVal = false;

// EVENTO PARA EL BTN RESTABLECER
btnReset.addEventListener("click", function (e) {
    e.preventDefault(); //cancela el comportamiento pot default

    // Limpiar campos
    txtNombre.value = "";
    txtApellido.value = "";
    txtEmail.value = "";
    txtMensaje.value = "";

    //Borrar alertas
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";

    // Borra bordes de error
    txtNombre.style.border = "";
    txtApellido.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";

})//Fin de eveto btnReset ---------------------------





// EVENTO PARA EL BTN ENVIAR 
btnEnviar.addEventListener("click", function (e) {
    e.preventDefault();

    // siempre inicia con un valor verdadero
    isValid = true;

    // que los campos esten sin alertas ni errores
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    txtNombre.style.border = "";
    txtApellido.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";

    // trim para quitar espacios
    txtNombre.value = txtNombre.value.trim();
    txtApellido.value = txtApellido.value.trim();
    txtEmail.value = txtEmail.value.trim();
    txtMensaje.value = txtEmail.value.trim();

    // validar Nombre
    if (txtNombre.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Nombre </strong> no es correcto</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        txtNombre.style.border = "solid 2px #B4016C";
        isValid = false;
    } else {
        nombreVal = true;
    }

    // validar Apellido
    if (txtApellido.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Apellido </strong> no es correcto</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        txtApellido.style.border = "solid 2px #B4016C";
        isValid = false;
    } else {
        apellidoVal = true;
    }

    //Validar EMAIl
    if (!txtEmail.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Mensaje </strong> no es válido</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        txtEmail.style.border = "solid 2px #B4016C";
        isValid = false;
    }else{
        emailVal=true;
    }

    // validar Mensaje
    if (txtMensaje.value.length < 3) {
        alertValidacionesTexto.insertAdjacentHTML("beforeend", `El <strong> Mensaje </strong> no es válido</br>`);
        // habilitar que se muestre el mensaje
        alertValidaciones.style.display = "block"
        // marcar el campo del error
        txtMensaje.style.border = "solid 2px #B4016C";
        isValid = false;
    } else {
        mensajeVal = true;
    }

    if (nombreVal == true && apellidoVal == true && emailVal == true && mensajeVal == true) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Mensaje ha sido enviado correctamente',
            showConfirmButton: false,
            timer: 1500
        })
        txtNombre.value = "";
        txtApellido.value = "";
        txtEmail.value = "";
        txtMensaje.value = "";
    } else {

    }

})
