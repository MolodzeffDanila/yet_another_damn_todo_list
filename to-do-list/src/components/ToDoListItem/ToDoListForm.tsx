import { useState } from "react"

export const ToDoListForm = ({addTask}: {addTask:any}) =>{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    return <div>
        <input value={title} placeholder="Название задачи" onChange={(event)=>{setTitle(event.target.value)}}></input>
        <input value={description} placeholder="Описание задачи" onChange={(event)=>{setDescription(event.target.value)}}></input>
        <button onClick={()=>{addTask({title,description})}}>Добавить</button>
    </div>
}