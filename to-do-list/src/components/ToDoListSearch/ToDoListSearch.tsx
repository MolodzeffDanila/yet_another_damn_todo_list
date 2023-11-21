export const ToDoListSearch = ({searchValue, setSearchValue, setShowDone}:{
    searchValue: string, 
    setSearchValue:(value: string)=>void, 
    setShowDone: ()=> void}) => {

    //@ts-ignore
    const handleChange = (event)=>{
        setSearchValue(event.target.value)
    }
    return <div className="search-header">
        <input type="text" onChange={handleChange} placeholder="Поиск по заголовку"/>
        <div> 
            <label>Показывать выполненные</label>
            <input type="checkbox" onChange={setShowDone}></input>
        </div>
    </div>
}