// Seleccionamos el input de texto donde el usuario escribe la tarea
const input = document.querySelector("input");

// Seleccionamos el botón que el usuario presiona para agregar la tarea
const button = document.querySelector("button");

// Seleccionamos la lista (ul) donde se mostrarán las tareas como elementos (li)
const ul = document.querySelector("ul");

// Agregamos un "escuchador de eventos" al botón para que ejecute una función cuando se hace clic
button.addEventListener("click", function () {

    // Obtenemos el texto ingresado por el usuario
    const task = input.value;

    // Verificamos que el texto no esté vacío o contenga solo espacios
    if (task.trim() !== "") {

        // Creamos un nuevo elemento <li> para representar la tarea
        const li = document.createElement("li");

        // Asignamos el texto de la tarea al contenido del <li>
        li.textContent = task;

        // Agregamos un event listener al <li> para que al hacer clic
        // se marque o desmarque como "completado"
        li.addEventListener("click", function () {
            li.classList.toggle("completed"); // Cambia la clase CSS "completed"
        });

        // Creamos un botón para eliminar la tarea
        const deletedBtn = document.createElement("button");
        deletedBtn.textContent = "🗑️"; // Icono de basura como texto del botón

        // Evento para eliminar la tarea cuando se hace clic en el botón
        deletedBtn.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que el clic también active el <li>
            li.remove(); // Elimina la tarea de la lista
        });

        // Añadimos el botón de eliminar dentro del <li>
        li.appendChild(deletedBtn);

        // Añadimos el <li> (con el botón incluido) al final de la lista
        ul.appendChild(li);

        // Limpiamos el campo de input para poder escribir una nueva tarea
        input.value = "";

    } else {
        // Si el input está vacío o solo tiene espacios, no se agrega nada
    }
});
