

export const addTask = (task) => {
  console.log("tasktasktasktask", task)
  return {
    type: 'ADD_TASK',
    payload: task
  }
}

export const deleteTask = (index) => {
  return {
    type: 'DELETE_TASK',
    payload: index
  }
}

export const editTask = (task) => {
  return {
    type: 'EDIT_TASK',
    payload: task
  }
}

export const changeIsComplete = (task) => {
  return {
    type: 'CHANGE_COMPLETE',
    payload: task
  }
}