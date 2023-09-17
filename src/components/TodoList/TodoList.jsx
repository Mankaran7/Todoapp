import Todo from "../Todo/Todo";

function TodoList({todos,setTodos}){
    function onDeleteTodo(id){
        const newtodoList=todos.filter(todo => todo.id !=id)
        setTodos(newtodoList)
    }
    function onEditTodo(id,newTodo){
        const newtodoList=todos.map(todo =>{
            if(todo.id==id){
                todo.text=newTodo;
            }
        })
        setTodos(newtodoList)
    
    }
    function onFinishTodo(id,state){
        const newtodoList=todos.map(todo=>{
            if(todo.id==id){
                todo.isFinished=state
            }
            return todo
        })
        setTodos(newtodoList)
    }
    return(
       todos && todos.map((todo) => <Todo 
          key={todo.id}
          text={todo.text}
         
          isFinished={todo.isFinished}
          editTodo={(newTodo)=> onEditTodo(todo.id,newTodo)}
          deleteTodo={()=> onDeleteTodo(todo.id)}
        finishTodo={(state)=> onFinishTodo(todo.id,state)}
           />
          )
    )

}
export default TodoList;