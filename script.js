const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// Función para encriptar una palabra usando las reglas personalizadas
function encriptarPalabra() {
    // Obtén la palabra ingresada por el usuario
    let palabraUsuario = document.getElementById('valorUsuario').value;

    // Reglas de encriptación
    let palabraEncriptada = palabraUsuario
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar la palabra encriptada en el campo correspondiente
    document.getElementById('palabraEncriptada').value = palabraEncriptada;

        // Limpiar el campo de entrada
        textArea.value = "";

        // Remover la imagen de fondo
        mensaje.style.backgroundImage = "none";    

}

// Asignar evento al botón de encriptar
document.getElementById('btnEncriptar').addEventListener('click', encriptarPalabra);

//Funcion para desencriptar la palabra remplzando las reglas personales
function desencriptarPalabra(){
//Se captura la palabara encriptada ingresada por el usuario
    let palabraEncriptada = document.getElementById('palabraEncriptada').value;

    //Reglas de encriptación
    let palabraDesencriptada = palabraEncriptada
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

//Mostrar la palabra desencriptada en el campo de entrada Palabra encriptada
document.getElementById('palabraEncriptada').value = palabraDesencriptada;

}

// Función para copiar la palabra encriptada al portapapeles usando la API de Clipboard
function copiarPalabra() {
    let palabraEncriptada = document.getElementById('palabraEncriptada').value;
    
    navigator.clipboard.writeText(palabraEncriptada)
        .then(() => {
            alert('Palabra copiada: ' + palabraEncriptada);
        })
        .catch(err => {
            console.error('Error al copiar la palabra: ', err);
        });
}




// Asignar evento al botón de encriptar
document.getElementById('btnEncriptar').addEventListener('click', encriptarPalabra);
document.getElementById('btnDesencriptar').addEventListener('click', desencriptarPalabra);
document.getElementById('btnCopiar').addEventListener('click', copiarPalabra);

// Forzar letras minúsculas en tiempo real en el campo de entrada
document.getElementById('valorUsuario').addEventListener('input', function(event) {
    event.target.value = event.target.value.toLowerCase();
});



