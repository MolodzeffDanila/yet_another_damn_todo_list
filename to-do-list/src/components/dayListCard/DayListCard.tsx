import { useStore } from "zustand"
import { DayType, dayNames } from "../../store/storeTypes"
import { ToDoListForm } from "../ToDoListItem/ToDoListForm"
import { ToDoListItem } from "../ToDoListItem/TodoListItem"
import "./DayListStyles.css"
import { useTodoStore } from "../../store/store"

export const DayListCard = ({day, dailyTasks}:{day:dayNames, dailyTasks:DayType[]}) =>{

    const { addTask } = useTodoStore();
    return <div >
    <div className="title-day">{day}</div>
        {
            dailyTasks.map((task) => 
            <ToDoListItem task={task}/>
            )
        }
        <ToDoListForm day={day} addTask={addTask}/>
    </div>
}