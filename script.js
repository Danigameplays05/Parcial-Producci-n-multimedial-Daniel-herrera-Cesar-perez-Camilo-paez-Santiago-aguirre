// 1. Mensaje en consola
console.log("Bienvenido al parcial de Programación Multimedia");


// 2. Botón cambiar fondo
document.getElementById("cambiarFondo").addEventListener("click", function() {
    const color = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color;
});


// 3. Contador de clics en imágenes
const imagenes = document.querySelectorAll("#galeria img");

imagenes.forEach((img, index) => {
    img.addEventListener("click", () => {
        console.log("Has hecho clic en la imagen " + (index + 1));
    });
});


// 4. Validación del formulario
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre === "") {
        alert("El nombre no puede estar vacío");
        return;
    }

    if (!correo.includes("@")) {
        alert("Correo no válido");
        return;
    }

    if (mensaje.length < 20) {
        alert("El mensaje debe tener al menos 20 caracteres");
        return;
    }

    alert("Formulario enviado correctamente");
});