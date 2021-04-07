var todoList = ["thato"];

const updateDisplay = (todoList) => {
  let todoOutput = document.getElementById('todo-output');
  todoOutput.innerHTML = ''
  for (var i in todoList) {
    todoOutput.innerHTML += `<li onclick="deleteTodo(${i})"> todo name ${todoList[i]} </li>`
  }
}

for (var todo of todoList) {
  console.log("show loop", todo)

}

for (var i in todoList) {
  console.log("show loop index", i)
}



const addTodo = () => {
  let todoName = document.getElementById('todoName').value
  todoList.push(todoName)
  updateDisplay(todoList)

}

const deleteTodo = (index) => {
  console.log("todo name", index)
  todoList.splice(index, 1);
  updateDisplay(todoList)
}