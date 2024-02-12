import React from 'react'

function TodoList({todos}) {  // {/* App js က todos နာမည်နဲံပို့တာကို လက်ခံ*/}
  return (
    <>
     <ul className="todo-list">
          {todos.map(todo=>(
            <li className="todo-item-container">
                <div className="todo-item">
                  <input type="checkbox" />{/* className Dynamic*/}
                  <span className={`todo-item-label ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>  {/* todoက completed tureဖြစ်ရင်လိုင်းနဲ့ပြ */}
                 
                </div>
                <button className="x-button">
                  <svg
                    className="x-button-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
          </li>
          ))}
          
        </ul> 
    </>
  )
}

export default TodoList
