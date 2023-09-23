function TodoReducer(state=[],action){
    if(action.type=='add_todo'){
        let nextId=state.length+1
       return  [...state,{id:nextId,text:action.payload.todoText,isFinished:false}]

    }else if(action.type=='edit_todo'){
        const newtodoList=state.map(todo =>{
            if(todo.id==action.payload.id){
                todo.text=action.payload.newtodo;
            }
            return todo
        })
        return newtodoList
    }
    else if(action.type=='finish_todo'){
        const newtodoList=state.map(todo=>{
            if(todo.id==action.payload.id){
                todo.isFinished=action.payload.state
            }
            return todo
        })
        return newtodoList
    }else if(action.type=='delete_todo'){
        const newtodoList=state.filter(todo => todo.id !=action.payload.id)
        return newtodoList

    }
    return state
}
export default TodoReducer