import React from 'react'
import Todo from '../components/Todo'

function TodoList({todos, deleteTodo}) {  // {/* App js က todos, deleteTodo fun နာမည်နဲံပို့တာကို လက်ခံ*/}


 
  return (
    <>
     <ul className="todo-list">
          {todos.map(todo=>(
          <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
          ))}
          
        </ul> 
    </>
  )
}

export default TodoList
