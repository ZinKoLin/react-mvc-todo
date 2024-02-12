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
    fetch('http://localhost:3001/todo') //fetch 
    .then(res=>res.json()) //json format change
    .then((todo)=>{ //todo နဲ့လက်ခံ
      
      setTodos(todo) // useEffect ထဲထည့်
      
    })
  },[])

  let addTodo = (todo)=>{
    //update data server side
    fetch('http://localhost:3001/todo',{
      method:"POST",// server ဘက်ပို့
      headers:{
        'Content-Type':'application/json'// json datatype
      },
      body: JSON.stringify(todo)// json format နဲ့ပြန်ပို့
    })

    //update data client side
    setTodos(prevState => [...prevState,todo])  //{/* မူလရှိနေတဲ့ useState က prevState fun ကိုခေါ်  ‌array destructureထဲထည့်, အသစ်ဝင်လာတဲ့ todo object ကိုarrayထည့်*/}
  }
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>

        <TodoForm addTodo={addTodo}/> {/* TodoForm ထဲပို့ */}
        <TodoList todos={todos}/> {/* todos နာမည်နဲ့ ူTodolist ဆိပို့ */}
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
