import React, { useState } from 'react'

function TodoForm({addTodo}) { // addTodo fun လက်ခံ

  let [title,setTitle]=useState('');

  let handleSubmit = (e)=>{
    e.preventDefault(); //{/* page refresh ကို preventလုပ် */}
    
    //add todo
    let todo = {   //todo object addTodo Fun က လက်ခံ
      id:Math.random(),
      title:title, //keyနဲ့ value တူရင် title တခုပဲရေးလဲရ
      completed:false
    };
    
    addTodo(todo)// add todo function ထဲtodo objectထည့်

    //clear input
    setTitle(''); //{/* user input စာ ပြန် reset */}
  }



  return (
   <>
   <form action="#" onSubmit={handleSubmit}> {/* from submit လုပ်*/}
    
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            onChange={e=>setTitle(e.target.value)} // user က inputရိုက်သမျှ event ဖမ်းပြီး title ထဲထည့်  
            value={title} // title နဲ့ချိတ် two way data binding 
          />
    </form>
   </>
  )
}

export default TodoForm
