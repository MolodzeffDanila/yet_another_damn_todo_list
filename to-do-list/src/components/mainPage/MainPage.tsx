import { useTodoStore } from "../../store/store";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { DayListCard } from "../dayListCard/DayListCard";
import "./MainPageStyles.css"
import { ToDoListForm } from "../ToDoListItem/ToDoListForm";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { ToDoListSearch } from "../ToDoListSearch/ToDoListSearch";

export const MainPage = () => {

    const { toDoList, addTask, filteredToDoList, filterToDoList } = useTodoStore();
    const {theme} = useContext(ThemeContext);
    const [searchValue, setSearchValue] = useState('');

    useEffect(()=>{
        filterToDoList(searchValue)
    }, [searchValue]);

    return <div className={theme ==="light" ? "" : "darkBack"}>
        <ThemeToggle/>
        <div className={theme ==="light" ? "toDoList" : "toDoList-dark"}>
            <div className={theme ==="light" ? "toDoCard" : "toDoCard-dark"}>
                <ToDoListSearch 
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </div>
            <div className={theme ==="light" ? "toDoCard" : "toDoCard-dark"}>
                <ToDoListForm addTask={addTask}/>
            </div>
            {filteredToDoList.map((day)=>{
                return <div className={theme ==="light" ? "toDoCard" : "toDoCard-dark"}>
                    <DayListCard dailyTask={day}/>
                </div>
            })}
        </div>
    </div>
}