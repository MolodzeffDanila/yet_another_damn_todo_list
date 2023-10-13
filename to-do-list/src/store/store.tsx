import { create } from 'zustand'
import { DayType, ToDoStoreType, dayNames } from './storeTypes'

interface TodoState {
    toDoList: toDoListType;
    addTask: (state:ToDoStoreType,day:dayNames, newTask:DayType) => void;
  }
type toDoListType = {
    monday: Array<DayType>,
    tuesday: Array<DayType>,
    wednesday: Array<DayType>,
    thursday: Array<DayType>,
    friday: Array<DayType>,
    saturday: Array<DayType>,
    sunday: Array<DayType>,
}
const toDoListInitialValue = {
    monday: [{title:"Посуда",description:'уничтожить'}],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
}

export const useTodoStore = create<TodoState>((set) => ({
    toDoList: toDoListInitialValue,
    addTask: (state:ToDoStoreType,day:dayNames, newTask:DayType)=>{
        //@ts-ignore
        set((state)=>{
            console.log("=-=-=-=-=-=-=-=-=-=-=")
            console.log(newTask)
            console.log(day)
            console.log({...state.toDoList, [day]:[...state.toDoList[day],newTask]})
            return {
                todoList: {...state.toDoList, [day]:[...state.toDoList[day],newTask]}
            }
        })
    }
  }))