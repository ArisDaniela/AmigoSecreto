Amigo Secreto 🎁

Este proyecto es una aplicación web simple que permite ingresar nombres de amigos y asignarles un amigo secreto de manera aleatoria. También incluye la opción de reiniciar el juego para volver a comenzar.

📌 Tecnologías Utilizadas

HTML para la estructura del sitio web.

CSS para el diseño y estilos visuales.

JavaScript para la lógica del sorteo y la interacción con el usuario.

🚀 Cómo Usar

Ingresa los nombres de los participantes en el campo de entrada.

Haz clic en "Añadir" para agregarlos a la lista.

Cuando todos los nombres estén ingresados, presiona "Sortear amigo" para generar las asignaciones.

Si deseas reiniciar el sorteo, haz clic en "Reiniciar" para borrar todos los datos y comenzar de nuevo.

📜 Código Principal

JavaScript (app.js):

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

🎨 Estilos CSS (style.css)

Para la apariencia, usamos una combinación de colores agradables y diseño responsivo.

🖥️ Archivos del Proyecto

index.html: Contiene la estructura principal de la aplicación.

style.css: Define los estilos visuales de la aplicación.

app.js: Implementa la lógica del sorteo y la interacción con el usuario.

📌 Mejoras Futuras

Permitir exportar los resultados en un archivo.

Agregar animaciones para mejorar la experiencia de usuario.

Mejorar la validación de nombres duplicados.