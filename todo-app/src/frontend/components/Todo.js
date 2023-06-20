import React from 'react'
import '../css/App.css'

const Todo = ({ todo, toggleTodo }) => {
    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    return (
        <div className="center-todoList">
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}></input>
                {todo.name}
            </label>

        </div>
    )
}

export default Todo