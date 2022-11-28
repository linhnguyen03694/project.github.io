const input = document.querySelector("input");
const form = document.querySelector("form");
const todos = document.querySelector(".todo");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let val = input.value.trim();
    if (val) {
        addTodo({
            text: val,
        });
    }
    input.value = "";
});

function addTodo(todo) {
    let li = document.createElement("li");
    li.innerHTML = `${todo.text}`;
    if (todo.status === "completed") {
        li.setAttribute("class", "completed");
    }
    li.addEventListener("click", function () {
        this.classList.toggle("completed");
        saveTodo();
    });
    li.addEventListener("contextmenu", function () {
        this.remove();
        saveTodo()
    });
    todos.appendChild(li);
}

function saveTodo() {
    const todoLi = document.querySelectorAll("li");
    let todoST = [];
    todoLi.forEach(item => {
        todoST.push({
            text: item.innerText,
            status: item.classList.contains("completed")
        });
    });
    localStorage.setItem("todoLi", JSON.stringify(todoST));
}