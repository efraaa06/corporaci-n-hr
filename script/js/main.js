// Obtener elementos del DOM
const userIcon = document.getElementById("user-icon");
const panelContainer = document.getElementById("panel-container");

// Mostrar/Ocultar el panel al hacer clic en el icono
userIcon.addEventListener("click", function () {
    if (panelContainer.style.display === "none" || panelContainer.style.display === "") {
        panelContainer.style.display = "block"; // Mostrar el panel
    } else {
        panelContainer.style.display = "none"; // Ocultar el panel
    }
});

// Función para cerrar sesión
document.getElementById("button").addEventListener("click", function () {
        window.location.href = "inicio.sesion.html";
});

        // Crear la celda para el botón de eliminar
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('borrar');

        // Agregar un ícono de basura
        const trashIcon = document.createElement('img');
        trashIcon.src = "img/basurero-blanco.png"; // Asegúrate de tener este ícono
        trashIcon.alt = "Eliminar";

        deleteButton.appendChild(trashIcon);

        // Añadir evento de eliminar
        deleteButton.addEventListener('click', () => eliminarEntrada(entrada, row));

        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        tablaBody.appendChild(row);
;

