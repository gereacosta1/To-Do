// Seleccionamos el input de texto donde el usuario escribe la tarea
const input = document.querySelector("input");
// Seleccionamos el botón que el usuario presiona para agregar la tarea
const button = document.querySelector("button");
// Seleccionamos la lista (ul) donde se van a mostrar las tareas como elementos (li)
const ul = document.querySelector("ul");

// Agregamos un "escuchador de eventos" al botón para que ejecute una función cuando se hace clic
button.addEventListener("click", function() {
        // Guardamos el texto que escribió el usuario en una variable llamada task
    const task = input.value;
        // Verificamos que el texto no esté vacío o lleno solo de espacios
    if (task.trim() !== "") {
                // Creamos un nuevo elemento <li> para representar una tarea en la lista
        const li = document.createElement("li");
                // Asignamos el texto de la tarea al contenido del <li>
        li.textContent = task;
                // Agregamos el <li> al final del <ul> para que se muestre en la lista
        ul.appendChild(li);
                // Limpiamos el campo de input para que quede listo para una nueva tarea
        input.value = "";
    }
        // Si la tarea estaba vacía o con espacios, no se hace nada (no se agrega a la lista)
});
