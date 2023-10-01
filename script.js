const txtmensaje = document.querySelector(".txtmensaje");
const txtArea = document.querySelector(".txtarea");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
    let textoEscrito = txtArea.value;
    let verificar = textoEscrito.match(/^[a-z\s]*$/);

    if (!verificar || verificar[0] !== textoEscrito) {
        alert("Solo se permiten letras minúsculas y espacios");
        return false;
    }
    return true;
}

function botonEncriptar() {
    if (validarTexto()) {
        const txtEncriptado = encriptar(txtArea.value);
        txtmensaje.value = txtEncriptado;
        txtmensaje.style.backgroundImage = "none";
        txtArea.value = "";
        copia.style.display = "block";
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const letraOriginal = matrizCodigo[i][0];
        const letraEncriptada = matrizCodigo[i][1];
        stringEncriptada = stringEncriptada.split(letraOriginal).join(letraEncriptada);
    }
    return stringEncriptada;
}

function botondesencriptar() {
    const txtEncriptado = desencriptar(txtArea.value);
    txtmensaje.value = txtEncriptado;
    txtArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const letraOriginal = matrizCodigo[i][0];
        const letraEncriptada = matrizCodigo[i][1];
        stringDesencriptada = stringDesencriptada.split(letraEncriptada).join(letraOriginal);
    }
    return stringDesencriptada;
}

function copiar() {
    txtmensaje.select();
    document.execCommand("copy");
    txtmensaje.value = "";
    alert("Texto Copiado");
}