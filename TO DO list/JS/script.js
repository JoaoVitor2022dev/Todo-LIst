/* selecao de elementos */ 

const todoForm = document.querySelector("#todo-form"); 
const todoInput = document.querySelector("#todo-input"); 
const todoList = document.querySelector("#todo-list"); 
const editform = document.querySelector("#edit-form"); 
const editInput = document.querySelector("#edit-input"); 
const cancelEditBtn = document.querySelector("#cancel-edit-btn"); 

let oldInputValue; 
 
                                 /* fruncion */  

const saveToDo = text => {
    
   /* criando uma div */ 

  const todo = document.createElement("div");
  todo.classList.add("todo");  
 
  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;    
  todo.appendChild(todoTitle); 
  
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo"); 
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>' 
  todo.appendChild(doneBtn);
  
  const editBtn = document.createElement("button"); 
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn); 

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo"); 
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(deleteBtn);


  /* colocando essa div no di.tudolist*/ 
  
  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();
}

const toggleForm = () => {
   editform.classList.toggle("hide");
   todoForm.classList.toggle("hide");
   todoList.classList.toggle("hide");   
}


const updateTodo = (editInputValue) =>  {  
 const todos = document.querySelectorAll(".todo"); 

 todos.forEach((todo) => {
   let todoTitle = todo.querySelector("h3");
   
   if (todoTitle.innerText === oldInputValue) {
      todoTitle.innerText =  editInputValue; 
   }
 });
}

                                   /* events*/ 

/* serve para criar as tabelas */ 
todoForm.addEventListener("submit", e => {
  e.preventDefault(); 
  
 const inputValue = todoInput.value;
 
 if (inputValue) {
    saveToDo(inputValue); 
 }
});

/* serve para cada evento que tem nos 3 button */ 
document.addEventListener("click", e => {
  const targetEl = e.target; 
  const parentEl = targetEl.closest("div"); 
  let todoTitles; 

  /*console.log(targetEl);*/
  console.log(parentEl);

  if (parentEl && parentEl.querySelector("h3")) {
      todoTitles = parentEl.querySelector("h3").innerHTML; 
  }
  /* esse 1 if ?? para coloca como feito */ 
  if (targetEl.classList.contains("finish-todo")) {
     parentEl.classList.toggle("done"); 
  }
  /* esse 2 if ?? para remover do painel, apenas remove */ 
 if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove(); 
 }
 /* esse 3 if ?? para o edit */ 
 if (targetEl.classList.contains("edit-todo")) {
    toggleForm();  
    editInput.value = todoTitles; 
    oldInputValue = todoTitles; 
 }
}); 


cancelEditBtn.addEventListener("click", e => {
   e.preventDefault(); 

   toggleForm(); 
}); 


editform.addEventListener('submit', e => {
   e.preventDefault();

  const editInputValue = editInput.value; 

   if (editInputValue) {
      updateTodo(editInputValue)      
   }

   toggleForm() // essa function serve para a estrutura inicial?? voltar ao normal  */ 

}); 
