
import { useState } from 'react';
import { addTask } from '../redux/actions/workShop'
import { useDispatch } from 'react-redux';


function TaskForm () {
  const [task, setTask] = useState({ name: '', surname: "", taskName: '', isComplete: false })
  const dispatch = useDispatch()


  const addTaskWithId = (task) => {
    const taskWithId = { ...task, id: Math.random() }
    dispatch(addTask(taskWithId))
  }

  return (
    <div className="App">
      <input
        value={task.name}
        name="name"
        onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
        placeholder="name" />

      <input
        value={task.surname}
        name="surname"
        onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
        placeholder="surname"
      />

      <input
        value={task.taskName}
        name="taskName"
        onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
        placeholder="task Name"
      />

      <button onClick={() => addTaskWithId(task)}> add </button>
    </div>
  );
}

export default TaskForm;
