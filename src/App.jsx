import { useState,useContext, useReducer } from 'react'
import TodoContext from './context/TodoContext'
import './App.css'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/AddTodo/AddTodo'
import TodoReducer from './reducers/TodoReducer'
import { Provider } from 'react-redux'
import store from './store'
function App() {
      const [todos,dispatch]=useReducer(TodoReducer,[])
  return (
    <>
     <Provider store={store}>
      <AddTodo />
      <TodoList />

     </Provider>
    </>
  )
}

export default App
