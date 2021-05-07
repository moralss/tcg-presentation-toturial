
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, changeIsComplete } from '../redux/actions/workShop'

function Tasks () {
  const tasks = useSelector((state) => state.workShop.tasks);
  const dispatch = useDispatch()
  console.log(tasks)
  const [editValue, setEditValue] = useState({ index: null, taskName: null });


  const changeStyle = (isComplete) => {
    if (isComplete == true) {
      return { backgroundColor: "black" };
    }
    else {
      return null
    }
  }
  return (
    <div className="App">
      <table >
        <thead>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => <tr style={changeStyle(task.isComplete)} key={index}>
            <td>{task.name}</td>
            <td>{task.surname}</td>
            <td>{task.taskName}</td>
            <button onClick={() => dispatch(deleteTask(index))}>delete </button>
            <button onClick={() => setEditValue({ id: task.id, taskName: task.taskName })}>edit </button>
            <button onClick={() => dispatch(changeIsComplete({ id: task.id, isComplete: true }))}>IsComplete </button>
          </tr>)}
        </tbody >
      </table>

      <input value={editValue.taskName} onChange={(e) => setEditValue({ ...editValue, taskName: e.target.value })} placeholder="edit value" />
      <button onClick={() => dispatch(editTask(editValue))}> SAVE EDIT</button>
    </div>
  );
}

export default Tasks;
