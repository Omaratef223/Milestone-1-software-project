import "./styles.css"
// explain the export function and how it returns the components
//4ata nar      
import {useState} from "react"
import "./style.css"
import {newtodoform} from "./newtodoformorm"

function App(){
  const[newItem, setNewItem] = useSatte("")
  const[todos, settodos] = useState([])

 function handelSubmit(e){ 
    e.preventDefault()

    setTodos(currentTodos =>{
      return[
        ...currentTodos,
        {
          id:crypto.randomUUID(),
title:newItem, complete:false 
        },
      ]
    })
}
// Remove the line or comment it out properly.
  
 
  return (
    <>
      <form onSubmit={handelSubmit} className="new-item-form">
        
        <div className="form-row">
          <label htmlFor="item"> New Item</label>
          <input type="text" id="item" />
          <input value = {newItem}
          onChange = {e => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label> 
          <button className="btn btn-danger">delete</button>
        </li>
        <li> 
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">delete</button>
        </li>
          {todos.map(todo => {
      return(
        <li key={todo.id}>
          <input type="checkbox" checked={todo.complete}/>
          <label>{todo.title}</label>
        <button className = " btn btn-danger">delete </button>
        </li>  
      )
        })}
      </ul>
    </>
    )
  }
  

