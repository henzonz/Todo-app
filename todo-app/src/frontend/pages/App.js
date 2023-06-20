import React, { useEffect, useState, useRef } from 'react'
import TodoList from '../components/TodoList'
import { v4 as uuid } from 'uuid'
import '../css/App.css'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();
  const LOCAL_STORAGE_KEY = 'myTodoApp.todos'

  //saving the todos whenever page refreshes
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])
  //setting todos in the page
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleClearAll() {
    const newTodos = todos.filter(todo => todo.length = 0)
    setTodos(newTodos)
  }
  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function toggleTodo(id) {
    //temp variable to avoid modifying variables directly to follow React fundamentals
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: uuid(),
        name: name,
        complete: false
      }]
    })
    todoNameRef.current.value = null
  }
  return (
    <>

      <TodoList className="center-todoList" todos={todos} toggleTodo={toggleTodo} />
      <div className="center-box">
        <div className="px">{todos.filter(todo => !todo.complete).length} tasks</div>
        <input ref={todoNameRef} className="rounded border-0" type="text"></input>
        <button className="px" onClick={handleAddTodo}>+</button>
        <button className="px" onClick={handleClearTodos}>Clear Item</button>
        <button className="px" onClick={handleClearAll}>Clear All</button>
      </div>

    </>
  )
}

export default App