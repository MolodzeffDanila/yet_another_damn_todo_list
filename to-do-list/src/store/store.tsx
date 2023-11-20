import { create } from 'zustand'
import { DayType } from './storeTypes'

interface TodoState {
    toDoList: DayType[];
    addTask: (newTask: DayType) => void
    doneTask: (title: string) => void
    filteredToDoList: DayType[];
    filterToDoList: (searchValue: string) => void
  }

const toDoListInitialValue = [{title:"Посуда",description:'уничтожить', isDone:false}]

export const useTodoStore = create<TodoState>((set) => ({
    toDoList: toDoListInitialValue,
    filteredToDoList: toDoListInitialValue,
    filterToDoList: (searchValue: string) => set((state)=>{
      state.filteredToDoList = searchValue ? state.filteredToDoList.filter((item)=>{
        return item.title.includes(searchValue) || item.description.includes(searchValue)
      }) : state.toDoList;
      return state
    }),
    addTask: (newTask: DayType) => set((state) => {
      state.toDoList.push(newTask)
      return { toDoList: state.toDoList }
    }),
    doneTask: (title:string) => set((state)=>{
      state.toDoList = state.toDoList.map((item)=>{
        console.log(state.toDoList)
        if(item.title === title){
          return {...item, isDone: !item.isDone}
        }else{
          return item
        }
      })
      return { toDoList: state.toDoList }
    })
}))