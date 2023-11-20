import { useTodoStore } from "../../store/store"
import { DayType,  } from "../../store/storeTypes"
import { ToDoListItem } from "../ToDoListItem/TodoListItem"
import "./DayListStyles.css"

export const DayListCard = ({dailyTask}:{dailyTask:DayType}) =>{

    const { doneTask } = useTodoStore()

    return <div >
    <div className="title-day">{dailyTask.title}</div>
        <ToDoListItem task={dailyTask} onChange={doneTask}/>
    </div>
}