
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/actions/todos'

function TodoList () {
  const todoList = useSelector(state => state.todos.todos)
  const dispatch = useDispatch();
  return (
    <div className="TodoForm">
      Todo List
      {todoList.map((todo, index) => <ul>  <li> {todo} <button onClick={() => dispatch(deleteTodo(index))}> X</button></li></ul>)}
    </div>
  );
}

export default TodoList;
