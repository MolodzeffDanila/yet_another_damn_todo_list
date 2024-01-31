import { create } from 'zustand'
import { DayType } from './storeTypes'
import { v4 as uuidv4 } from 'uuid';
interface TodoState {
    toDoList: DayType[];
    addTask: (newTask: DayType) => void
    doneTask: (title: string) => void
    filteredToDoList: DayType[];
    filterToDoList: (searchValue: string) => void
    isShowDone: boolean
    setShowDone: () => void
    searchValue: string
  }

const toDoListInitialValue : DayType[] = []

export const useTodoStore = create<TodoState>((set) => ({
    toDoList: toDoListInitialValue,
    filteredToDoList: toDoListInitialValue,
    isShowDone: false,
    searchValue: '',
    setShowDone: () => set((state) => {
      state.isShowDone = !state.isShowDone
      return { isShowDone: state.isShowDone}
    }),
    filterToDoList: (searchValue: string) => set((state)=>{
      state.searchValue = searchValue;
      state.filteredToDoList = searchValue ? state.toDoList.filter((item)=>{
        return (item.title.includes(searchValue) || item.description.includes(searchValue))
      }) : state.toDoList;

      if(state.isShowDone){
        state.filteredToDoList = state.filteredToDoList;
      }else{
        state.filteredToDoList = state.filteredToDoList.filter( e => !e.isDone);
      }
    
      return { filteredToDoList: state.filteredToDoList, searchValue: state.searchValue}
    }),
    addTask: (newTask: DayType) => set((state) => {
      const id = uuidv4();
      state.toDoList.push({...newTask, id, isDone:false})
      state.filterToDoList(state.searchValue)
      return { toDoList: state.toDoList }
    }),
    doneTask: (id:string) => set((state)=>{
      state.toDoList = state.toDoList.map((item)=>{
        if(item.id === id){
          return {...item, isDone: !item.isDone}
        }else{
          return item
        }
      })
      state.filterToDoList(state.searchValue)
      return { toDoList: state.toDoList }
    })
}))