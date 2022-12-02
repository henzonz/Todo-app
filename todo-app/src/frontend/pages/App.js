import React from 'react'

function App() {
  return (
    <>
    Todo List
    <form>
        <input className="rounded border-0" type="text"></input>
        <button type="submit">+</button>
        <button>Clear Item</button>
    </form>
    </>
  )
}

export default App