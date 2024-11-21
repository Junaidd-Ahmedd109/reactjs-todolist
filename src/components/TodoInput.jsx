import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue , todos} = props
    return (
        <header>
            
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter Todo..." />
            <button onClick={() => {
                 if (!todoValue.trim() || todos.some(todo => todo === todoValue)) {
                    alert("Invalid or duplicate to-do");
                    return;
                }
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}