// Definimos una expresión regular para validar el nombre (solo letras y espacios)
const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

//Array que servirá para almacenar los nombres de los amigos
let amigos = [];

//Función para agregar los amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    //Validación que el campo no se encuentre vacío
    if(nombreAmigo === ""){
        alert("Por favor insertar un nombre");
        return; //Detiene la ejecución de la función
    }

    //Validación de nombre correcto
    if (!nombreValido.test(nombreAmigo)) {
        alert("Nombre inválido. Solo se permiten letras y espacios.");
        return;
    }

    //Validación que el nombre no se encuentre duplicado
    if(amigos.includes(nombreAmigo)){
        alert(`El nombre ${nombreAmigo} ya se encuentra en la lista`);
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo
    inputAmigo.value = "";

    //Actualizar lista
    actualizarLista();
}

//Función para actualizar la lista de amigos
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");

    //Limpiar contenido actual
    listaAmigos.innerHTML = ""; //Borra cualquier contenido dentro de la lista

    //Recorre el array en un ciclo for
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Función que seleccione un nombre aleatorio
function sortearAmigo(){
    //Revisar que exista amigos disponibles
    if(amigos.length === 0){
        alert("No hay nombres disponibles. Agregar al menos uno por favor");
        return;
    }

    //Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un número aleatorio

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Índice aleatorio para obtener un nombre del Array

    //Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

//Función para limpiar la lista de amigos
function limpiarLista() {
    amigos = []; // Vaciar el array de amigos
    actualizarLista(); // Actualizar la lista visualmente
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar el resultado del sorteo
}
