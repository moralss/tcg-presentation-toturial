var employees = []
var editIndex = 0;
var editTask = document.getElementById('editTask');

const displayEmployees = () => {
  const displayEmployees = document.getElementById('displayEmployees');
  displayEmployees.innerHTML = ''
  for (var i in employees) {
    displayEmployees.innerHTML += `
                  <tr>
                  <td>${employees[i].name}</td>
                  <td>${employees[i].surname}</td>
                  <td>${employees[i].taskAssigned}</td>
                  <div> 
                    <button onclick="deleteEmployees(${i})"> delete </button>
                    <button onclick="editEmployees(${i})"> edit </button>
                  </div>                  
                  </tr>
                  `
  }
}
// displayEmployees()

const submit = () => {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const task = document.getElementById("task").value;
  console.log(name, surname, task)
  employees.push({ name, surname, taskAssigned: task })
  displayEmployees()
}

const deleteEmployees = (index) => {
  employees.splice(index, 1);
  displayEmployees()
}

const editEmployees = (index) => {
  var employee = employees[index]
  console.log("show me this", employee)
  editTask.value = employee.taskAssigned
  editIndex = index;
}


const saveEdit = () => {
  employees[editIndex].taskAssigned = editTask.value
  displayEmployees()
}










