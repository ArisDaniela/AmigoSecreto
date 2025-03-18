let amigos = [];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    input.value = "";
    input.focus();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para realizar el sorteo.");
        return;
    }

    let asignaciones = new Map();
    let nombresDisponibles = [...amigos];

    for (let amigo of amigos) {
        let posibles = nombresDisponibles.filter(nombre => nombre !== amigo);
        
        if (posibles.length === 0) {
            alert("No se pudo realizar el sorteo. Intenta nuevamente.");
            return;
        }

        let seleccionado = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones.set(amigo, seleccionado);
        
        nombresDisponibles = nombresDisponibles.filter(nombre => nombre !== seleccionado);
    }

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    asignaciones.forEach((amigoSecreto, amigo) => {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${amigoSecreto}`;
        resultadoLista.appendChild(li);
    });
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}
