import { useState ,useContext} from "react"
import TodoContext from "../../context/TodoContext"
function AddTodo(){
    const {dispatch}=useContext(TodoContext)
    const [todoText,setTodoText]=useState('')
    function addTodo(todoText){
       dispatch({type:'add_todo',payload:{todoText}})
    }
    return (
        <>
        <input  placeholder="Add your new todo"
         onChange={(e)=> setTodoText(e.target.value)}
         value={todoText}
        />
         <button onClick={()=>{
           addTodo(todoText)
            setTodoText('')
         }}>Submit</button>
        </>
    )
}
export default AddTodo