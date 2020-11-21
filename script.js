var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

todoList.innerHTML = ""
function renderTodos () {
for (var i = 0; i < todos.length; i++) {
    var li = document.createElement('li');
    li.innerText = todos[i]
    todoList.appendChild(li);}

}

function addTodo (event) {
event.preventDefault(event);
if (newTodo !== '') 
{var newTodo = todoInput.value;
todos.push(newTodo)
todoInput = null;
renderTodos ()}

}

todoForm.addEventListener('submit', todoForm)
renderTodos()