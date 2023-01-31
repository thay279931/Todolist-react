function TodoText({ id, text, toggleTodoEditing, setInputEditingValue }) {
  return (
    <>
      <span
        onDoubleClick={() => {
          // 切換編輯state
          toggleTodoEditing(id)
        }}
      >
        {text}
      </span>
    </>
  )
}

export default TodoText
