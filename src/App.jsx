import { useState,useContext, useReducer } from 'react'
import TodoContext from './context/TodoContext'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoReducer from './reducers/TodoReducer'

function App() {
      const [todos,dispatch]=useReducer(TodoReducer,[])
  return (
    <>
       <TodoContext.Provider value={{todos,dispatch}}>
         <AddTodo  />

         <TodoList />
       </TodoContext.Provider>
     </>
  )
}

export default App
