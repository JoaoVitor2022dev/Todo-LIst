/* selecao de elementos */ 
/* selecao de elementos */ 

const todoForm = document.querySelector("#todo-form"); 
const todoInput = document.querySelector("#todo-input"); 
const todoList = document.querySelector("#todo-list"); 
const editform = document.querySelector("#edit-form"); 
const editInput = document.querySelector("#edit-input"); 
const cancelEditBtn = document.querySelector("#cancel-edit-btn"); 

/* fruncion */ 

const saveToDo = text => {
   
  const todo = document.createElement("div");
  todo.classList.add("todo");  
 
  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;    
  todo.appendChild(todoTitle); 
  
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' 
  todo.appendChild(doneBtn);
  
  const editBtn = document.createElement("button"); 
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn); 

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(removeBtn);

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();

}

/* events*/ 

todoForm.addEventListener("submit", (e) => {
  e.preventDefault(); 
  
 const inputValue = todoInput.value;
 
 if (inputValue) {
    saveToDo(inputValue); 
 }
});


document.addEventListener("click", e => {
  const targetEl = e.target; 
  const parentEl = targetEl.closest("div"); 

  /* esse 1 if é para coloca como feito */ 

  if (targetEl.classList.contains("finish-todo")) {
     parentEl.classList.toggle("done"); 
  }

  /* esse 2 if é para remover do painel, apenas remove */ 

 if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove(); 
 }

}); 
