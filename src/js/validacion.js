// ******* VALIDACIÓN DEL FORMULARIO ******
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
// Traer los elementos
let btnEnviar = document.getElementById("btnEnviar");
let btnReset = document.getElementById("btnReset");

let txtNombre = document.getElementById("Nombre");
let txtApellido = document.getElementById("Apellido");
let txtEmail = document.getElementById("email");
let txtMensaje = document.getElementById("mensaje");

let alertValidacionesNombre = document.getElementById("alertValidacionesNombre");
let alertValidacionesApellido = document.getElementById("alertValidacionesApellido");
let alertValidacionesEmail = document.getElementById("alertValidacionesEmail");
let alertValidacionesMensaje = document.getElementById("alertValidacionesMensaje");

let isValid = false;

let valEmail = false;
let nombreVal = false;
let apellidoVal = false;
let emailVal = false;
let mensajeVal = false;

let errores = 0;

// EVENTO PARA EL BTN RESTABLECER
btnReset.addEventListener("click", function (e) {
    e.preventDefault(); //cancela el comportamiento pot default

    // Limpiar campos
    txtNombre.value = "";
    txtApellido.value = "";
    txtEmail.value = "";
    txtMensaje.value = "";

    //Borrar alertas
    alertValidacionesNombre.style.display = "none";
    alertValidacionesApellido.style.display = "none";
    alertValidacionesEmail.style.display = "none";
    alertValidacionesMensaje.style.display = "none";

    // Borra bordes de error
    txtNombre.style.border = "";
    txtApellido.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";

})//Fin de eveto btnReset ---------------------------

// EVENTO PARA EL BTN ENVIAR 
btnEnviar.addEventListener("click", function (e) {
    e.preventDefault();

    // que los campos esten sin alertas ni errores
    alertValidacionesNombre.style.display = "none";
    alertValidacionesApellido.style.display = "none";
    alertValidacionesEmail.style.display = "none";
    alertValidacionesMensaje.style.display = "none";

    txtNombre.style.border = "";
    txtApellido.style.border = "";
    txtEmail.style.border = "";
    txtMensaje.style.border = "";

    // trim para quitar espacios
    txtNombre.value = txtNombre.value.trim();
    txtApellido.value = txtApellido.value.trim();
    txtEmail.value = txtEmail.value.trim();
    txtMensaje.value = txtMensaje.value.trim();

    // validar Nombre
    if (!txtNombre.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) == true || (txtNombre.value.length < 3)) {
        // habilitar que se muestre el mensaje
        alertValidacionesNombre.style.display = "block"
        // marcar el campo del error
        txtNombre.style.border = "solid 2px #B4016C";
        nombreVal = false;
        errores ++;  
    } else {
        nombreVal = true;
    }

    // validar Apellido
    if (txtApellido.value.match(/^([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/) == true || (txtApellido.value.length < 3)) {
        // habilitar que se muestre el mensaje
        alertValidacionesApellido.style.display = "block"
        // marcar el campo del error
        txtApellido.style.border = "solid 2px #B4016C";
        apellidoVal = false;
        errores ++;  
    } else {
        apellidoVal = true;
    }

    //Validar EMAIl
    if (!txtEmail.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        // habilitar que se muestre el mensaje
        alertValidacionesEmail.style.display = "block"
        // marcar el campo del error
        txtEmail.style.border = "solid 2px #B4016C";
        emailVal=false;
        errores ++;  
    }else{
        emailVal=true;
    }

    // validar Mensaje
    if (txtMensaje.value.length < 20) {
        // habilitar que se muestre el mensaje
        alertValidacionesMensaje.style.display = "block"
        // marcar el campo del error
        txtMensaje.style.border = "solid 2px #B4016C";
        mensajeVal = false;
        errores ++;  
    } else {
        mensajeVal = true;
    }

    if (nombreVal == true && apellidoVal == true && emailVal == true && mensajeVal == true) {
        Email.send({
            SecureToken: '4397aba7-2e30-4120-9b80-c7fe47087def',
            To: "tolumes.daniela@gmail.com",
            From: txtEmail.value,
            Subject: "Hola estimado",
            Body: "Este es un mensaje de prueba"
        }).then(
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu Mensaje ha sido enviado correctamente',
            showConfirmButton: false,
            timer: 1500
        })  );
        txtNombre.value = "";
        txtApellido.value = "";
        txtEmail.value = "";
        txtMensaje.value = "";
    } else {

    }

})
