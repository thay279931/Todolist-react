import { useState } from 'react'

function EditForm({ id, updateTodo, text }) {
  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
  // 使用衍生的props作為state初始值
  // https://vhudyma-blog.eu/react-antipatterns-props-in-initial-state/
  // 一般而言，props應避免作為state初始值, 除非你只需要在內部狀態初始化而已，而且之後props值不會再被更動，或是元件不需要再反應其它的更動時。
  const [inputEditingValue, setInputEditingValue] = useState(text)

  return (
    <>
      <input
        type="text"
        value={inputEditingValue}
        onChange={(e) => {
          setInputEditingValue(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            updateTodo(id, {
              text: inputEditingValue,
              editing: false,
            })
          }
        }}
      />
    </>
  )
}

export default EditForm
