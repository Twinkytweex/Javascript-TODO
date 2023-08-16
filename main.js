const todoInput = document.getElementById("todo-name");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");
const deleteList = document.getElementById("delete-button");

addButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (todoInput.value !== ''){
      const todoText = todoInput.value;
      const listItem = document.createElement("li");
      listItem.textContent = todoText;
      todoList.appendChild(listItem);
      todoInput.value = "";
    }
});

deleteList.addEventListener("click", function(event) {
    event.preventDefault();
    const lastListItem = todoList.lastElementChild;
    if (lastListItem) {
        todoList.removeChild(lastListItem);
    }
});