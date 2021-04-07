
import { useState } from 'react'
import { addTodo } from '../redux/actions/todos'
import { useDispatch } from 'react-redux'


function TodoForm () {
  const [todoName, setTodo] = useState("")
  const dispatch = useDispatch()


  return (
    <div className="TodoForm">
      <input placeholder="add todo" onChange={(e) => setTodo(e.target.value)} value={todoName} />
      <button onClick={() => dispatch(addTodo(todoName))}> add todo </button>
    </div>
  );
}

export default TodoForm;
