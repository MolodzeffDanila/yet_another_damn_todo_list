import { useState } from "react"
import { useTodoStore } from "../../store/store";
import { dayNames } from "../../store/storeTypes";

export const ToDoListForm = ({addTask, day}: {day:dayNames,addTask:any}) =>{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const storeObject = useTodoStore((state) => state.toDoList);
    
    return <div>
        <input value={title} placeholder="Название задачи" onChange={(event)=>{setTitle(event.target.value)}}></input>
        <input value={description} placeholder="Описание задачи" onChange={(event)=>{setDescription(event.target.value)}}></input>
        <button onClick={()=>{addTask(storeObject,day,{title,description})}}>Добавить</button>
    </div>
}