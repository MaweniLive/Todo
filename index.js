// Getting access to the elements by their ids using the method getElementById()
const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

//Use Array to store to do tasks
let todoArray = [
]; 

//Adding Items to the To-Do List
addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  todoArray.push(text.value);
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});

//Updating Items in the To-Do List


//Displaying the To-Do List Changes
function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='d-flex mb-4 align-items-center'>
   <p class='w-full text-grey-darkest' id='hover'>${list}</p> 
   <span>
   <i onclick='deleteTodo(${ind})' id="close-btn" class="fa-solid fa-circle-xmark ">
   </i>
   
   
  

</div>`;
  });
  listBox.innerHTML = htmlCode;
}

//Deleting Items From the To-Do List
function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
}
