import { useState } from 'react'

function AddForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('')
  // 處理要避開輸入法拼字用Enter的指標
  const [isComposition, setIsComposition] = useState(false)

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        // 中文輸入法用
        onCompositionStart={() => {
          setIsComposition(true)
        }}
        onCompositionEnd={() => {
          setIsComposition(false)
        }}
        onKeyDown={(e) => {
          // 中文輸入期間不會加入到列表中
          if (e.key === 'Enter' && isComposition === false) {
            addTodo(e.target.value)

            // 清空文字輸入框
            setInputValue('')
          }
        }}
      />
    </>
  )
}

export default AddForm
