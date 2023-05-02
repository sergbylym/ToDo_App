import { useState } from "react";



const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    const handleKeyDown = e => {
        if (e.keyCode === 13 ) {
          addTodo(title)
        }
      }


      const addTodo = (title) => {
        setTodos( prev =>[ {
          id:new Date(), 
          title,
          isCompleted:false,
        },...prev])
        setTitle('')
       }

    return (
<div className=" flex items-center justify-between mb-4 rounded-2xl bg-gray-800 px-5 py-2 w-full  mt-20">
 <input className="bg-transparent w-full border-none outline-none placeholder-pink-400"
  type='text'
  onChange={e => setTitle(e.target.value)}
  value={title}   
  placeholder= 'Add task...'
  onKeyDown= {handleKeyDown}   
 />

</div>
    )
}


export default CreateTodoField;