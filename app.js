const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", function() {
    const task = input.value;
    if (task.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
        input.value = "";
    }
});
