import EditForm from './EditForm'
import TodoText from './TodoText'
import { useState } from 'react'

function TodoItem({
  todo,
  toggleTodoCompleted,
  toggleTodoEditing,
  updateTodo,
  deleteTodo,
}) {
  return (
    <li className={todo.completed ? 'completed' : 'not-completed'}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {
          toggleTodoCompleted(todo.id)
        }}
      />
      {todo.editing ? (
        <EditForm id={todo.id} updateTodo={updateTodo} text={todo.text} />
      ) : (
        <TodoText
          id={todo.id}
          text={todo.text}
          toggleTodoEditing={toggleTodoEditing}
        />
      )}
      <button
        onClick={() => {
          deleteTodo(todo.id)
        }}
      >
        X
      </button>
    </li>
  )
}

export default TodoItem