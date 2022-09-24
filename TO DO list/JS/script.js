/* selecao de elementos */ 

const todoForm = document.querySelector("#todo-form"); 
const todoInput = document.querySelector("#todo-input"); 
const todoList = document.querySelector("#todo-list"); 
const editform = document.querySelector("#edit-form"); 
const editInput = document.querySelector("#edit-input"); 
const cancelEditBtn = document.querySelector("#cancel-edit-btn"); 

/* fruncion */ 

/* events*/ 

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  console.log("enviou form"); 
} ); 
