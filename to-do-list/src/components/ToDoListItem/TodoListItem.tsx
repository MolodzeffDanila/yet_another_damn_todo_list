import { DayType } from "../../store/storeTypes"
import "./TodoItemStyles.css"
export const ToDoListItem = ({task}:{task:DayType}) => {

    return <div className="to-do-item">
        <div className="title">{task.title}</div>
        <p>{task.description}</p>
    </div>
}