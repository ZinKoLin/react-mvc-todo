import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllAndRemain from './components/CheckAllAndRemain';
import TodoFilter from './components/TodoFilter';
import ClearCompleteBtn from './components/ClearCompleteBtn';
import { useEffect, useState } from 'react';

function App() {

  let[todos,setTodos] =useState([])

  useEffect(()=>{
    fetch('http://localhost:3001/todo')
    .then(res=>res.json())
    .then((todo)=>{
      
      setTodos(todo)
      
    })
  },[])

  let addTodo = (todo)=>{
    //update data server side
    fetch('http://localhost:3001/todo',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(todo)
    })

    //update data client side
    setTodos(prevState => [...prevState,todo])
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}/>
        <CheckAllAndRemain/>

      
        <div className="other-buttons-container">
          
          <TodoFilter/>

          
          <ClearCompleteBtn/>
        </div>
      </div>
    </div>
  );
}

export default App;
