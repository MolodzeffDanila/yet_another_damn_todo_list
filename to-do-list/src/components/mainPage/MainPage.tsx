import { useStore } from "zustand";
import { useTodoStore } from "../../store/store";
import { ToDoStoreType, dayNames } from "../../store/storeTypes";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { DayListCard } from "../dayListCard/DayListCard";
import "./MainPageStyles.css"

export const dayList:dayNames[] = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

export const MainPage = () => {

    const { toDoList } = useTodoStore();

    return <>
        <ThemeToggle/>
        <div className="toDoList">
            {dayList.map((day)=>{
                return <div className="toDoCard">
                    <DayListCard day={day} dailyTasks={toDoList[day]}/>
                </div>
            })}
        </div>
    </>
}