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
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        <TodoForm/>
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
