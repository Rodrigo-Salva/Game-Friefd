//Variables
let listarAmigosSecretos = [];
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

//Función para asignar texto a un elemento
function asigtextoElemento(elemento, texto) {
    const elementoHtml = document.querySelector(elemento);
    elementoHtml.textContent = texto;
}

//Función para agregar un amigo y guardarlo en el array
function agregarAmigo() {
    const amigoIngresado = inputAmigo.value.trim();

    if (amigoIngresado === "") {
        alert("Por favor ingrese un nombre valido");
        return; 
    }

    if (!listarAmigosSecretos.includes(amigoIngresado)) {
        listarAmigosSecretos.push(amigoIngresado);

        // Actualizar la lista visual
        const li = document.createElement('li');
        li.textContent = amigoIngresado;
        listaAmigos.appendChild(li);

        asigtextoElemento('p', `${amigoIngresado} ha sido agregado a la lista.`);
        console.log(listarAmigosSecretos);
    } else {
        asigtextoElemento('p', `${amigoIngresado} ya está en la lista.`);
    }

    limpiarCaja();
}

//Función para limpiar la caja de texto
function limpiarCaja() {
    inputAmigo.value = '';
}

//Funcion para limpiar la caja p y li
function limpiarLista() {
    listarAmigosSecretos = [];
    asigtextoElemento('p', '');
    listaAmigos.innerHTML = '';   
}   


//Función para sortear un amigo secreto
function sortearAmigo() {
    if (listarAmigosSecretos.length < 2) {
        asigtextoElemento('p', 'Debe haber al menos 2 amigos para realizar el sorteo.');
        return; 
    }

    //Empezar el sorteo
    const amigoSecreto = listarAmigosSecretos[Math.floor(Math.random() * listarAmigosSecretos.length)];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    limpiarLista();
}
