import { useContext } from "react";
import { DayType } from "../../store/storeTypes"
import "./TodoItemStyles.css"
import { ThemeContext } from "../../providers/ThemeProvider";
export const ToDoListItem = ({task, onChange}:{task:DayType, onChange:(title:string)=>void}) => {
    const {theme} = useContext(ThemeContext);

    const handleDone = () =>{
        onChange(task.title);
    }

    return <div className={theme==="light" ? "to-do-item" : "to-do-item-dark"}>
        <div className="title">{task.title}</div>
        <p>{task.description}</p>
        <input type="checkbox" checked={task.isDone} onChange={handleDone}></input>
    </div>
}